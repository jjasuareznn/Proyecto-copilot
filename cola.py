"""
ESTRUCTURA DE DATOS: COLA (QUEUE)
Implementación de Cola usando lista enlazada y arreglo circular
Autor: Julián Suárez | INCCA
Materia: Estructura de Datos 2
"""

# ============================================
# IMPLEMENTACIÓN 1: COLA CON LISTA ENLAZADA
# ============================================

class Nodo:
    """
    Clase que representa un nodo en la cola
    Cada nodo contiene un dato y una referencia al siguiente nodo
    """
    def __init__(self, dato):
        self.dato = dato
        self.siguiente = None


class Cola:
    """
    Clase Cola implementada con lista enlazada
    - Operación enqueue: O(1) - agregar al final
    - Operación dequeue: O(1) - remover del inicio
    - Operación peek: O(1) - ver el primer elemento
    """
    
    def __init__(self):
        self.inicio = None
        self.fin = None
        self._tamaño = 0
    
    def enqueue(self, dato):
        """
        Agregar un elemento al final de la cola
        """
        nuevo_nodo = Nodo(dato)
        
        if self.esta_vacia():
            self.inicio = nuevo_nodo
            self.fin = nuevo_nodo
        else:
            self.fin.siguiente = nuevo_nodo
            self.fin = nuevo_nodo
        
        self._tamaño += 1
    
    def dequeue(self):
        """
        Remover y retornar el elemento al inicio de la cola
        Levanta excepción si la cola está vacía
        """
        if self.esta_vacia():
            raise IndexError("No se puede hacer dequeue en una cola vacía")
        
        dato = self.inicio.dato
        self.inicio = self.inicio.siguiente
        self._tamaño -= 1
        
        if self.esta_vacia():
            self.fin = None
        
        return dato
    
    def peek(self):
        """
        Retorna el elemento al inicio sin removerlo
        """
        if self.esta_vacia():
            raise IndexError("Cola vacía")
        
        return self.inicio.dato
    
    def esta_vacia(self):
        """
        Verifica si la cola está vacía
        """
        return self._tamaño == 0
    
    def tamaño(self):
        """
        Retorna el número de elementos en la cola
        """
        return self._tamaño
    
    def __str__(self):
        """
        Representación en string de la cola
        """
        elementos = []
        nodo_actual = self.inicio
        
        while nodo_actual is not None:
            elementos.append(str(nodo_actual.dato))
            nodo_actual = nodo_actual.siguiente
        
        return "Cola: [" + " -> ".join(elementos) + "]"


# ============================================
# IMPLEMENTACIÓN 2: COLA CON ARREGLO CIRCULAR
# ============================================

class ColaArreglo:
    """
    Clase Cola implementada con arreglo circular
    - Operación enqueue: O(1) amortizado
    - Operación dequeue: O(1)
    - Operación peek: O(1)
    - Ventaja: Mejor localidad de memoria
    - Desventaja: Tamaño fijo (requiere redimensionamiento)
    """
    
    def __init__(self, capacidad=10):
        self.arreglo = [None] * capacidad
        self.inicio = 0
        self.fin = -1
        self._tamaño = 0
        self.capacidad = capacidad
    
    def enqueue(self, dato):
        """
        Agregar un elemento al final de la cola
        Si el arreglo está lleno, se redimensiona automáticamente
        """
        if self._tamaño == self.capacidad:
            self._redimensionar()
        
        self.fin = (self.fin + 1) % self.capacidad
        self.arreglo[self.fin] = dato
        self._tamaño += 1
    
    def dequeue(self):
        """
        Remover y retornar el elemento al inicio de la cola
        Levanta excepción si la cola está vacía
        """
        if self.esta_vacia():
            raise IndexError("No se puede hacer dequeue en una cola vacía")
        
        dato = self.arreglo[self.inicio]
        self.arreglo[self.inicio] = None
        self.inicio = (self.inicio + 1) % self.capacidad
        self._tamaño -= 1
        
        return dato
    
    def peek(self):
        """
        Retorna el elemento al inicio sin removerlo
        """
        if self.esta_vacia():
            raise IndexError("Cola vacía")
        
        return self.arreglo[self.inicio]
    
    def esta_vacia(self):
        """
        Verifica si la cola está vacía
        """
        return self._tamaño == 0
    
    def tamaño(self):
        """
        Retorna el número de elementos en la cola
        """
        return self._tamaño
    
    def _redimensionar(self):
        """
        Redimensiona el arreglo cuando está lleno
        Aumenta la capacidad al doble
        """
        nuevo_arreglo = [None] * (self.capacidad * 2)
        
        # Copiar elementos manteniendo el orden
        for i in range(self._tamaño):
            nuevo_arreglo[i] = self.arreglo[(self.inicio + i) % self.capacidad]
        
        self.arreglo = nuevo_arreglo
        self.inicio = 0
        self.fin = self._tamaño - 1
        self.capacidad = self.capacidad * 2
    
    def __str__(self):
        """
        Representación en string de la cola
        """
        elementos = []
        for i in range(self._tamaño):
            elementos.append(str(self.arreglo[(self.inicio + i) % self.capacidad]))
        
        return "ColaArreglo: [" + " -> ".join(elementos) + "]"


# ============================================
# PRUEBAS Y EJEMPLOS
# ============================================

if __name__ == "__main__":
    print("="*60)
    print("DEMOSTRACIÓN: COLA CON LISTA ENLAZADA")
    print("="*60)
    
    cola1 = Cola()
    print("\n1. Cola vacía creada")
    print(f"   ¿Está vacía? {cola1.esta_vacia()}")
    
    print("\n2. Agregando elementos: 10, 20, 30, 40")
    cola1.enqueue(10)
    cola1.enqueue(20)
    cola1.enqueue(30)
    cola1.enqueue(40)
    print(f"   {cola1}")
    print(f"   Tamaño: {cola1.tamaño()}")
    
    print("\n3. Viendo el primer elemento (peek)")
    print(f"   Primer elemento: {cola1.peek()}")
    
    print("\n4. Removiendo elementos")
    print(f"   Dequeue: {cola1.dequeue()}")
    print(f"   {cola1}")
    print(f"   Dequeue: {cola1.dequeue()}")
    print(f"   {cola1}")
    
    print("\n" + "="*60)
    print("DEMOSTRACIÓN: COLA CON ARREGLO CIRCULAR")
    print("="*60)
    
    cola2 = ColaArreglo(5)
    print("\n1. ColaArreglo vacía creada (capacidad = 5)")
    print(f"   ¿Está vacía? {cola2.esta_vacia()}")
    
    print("\n2. Agregando elementos: 'A', 'B', 'C', 'D', 'E'")
    cola2.enqueue('A')
    cola2.enqueue('B')
    cola2.enqueue('C')
    cola2.enqueue('D')
    cola2.enqueue('E')
    print(f"   {cola2}")
    print(f"   Tamaño: {cola2.tamaño()}, Capacidad: {cola2.capacidad}")
    
    print("\n3. Agregando más elementos (redimensionamiento automático)")
    cola2.enqueue('F')
    cola2.enqueue('G')
    print(f"   {cola2}")
    print(f"   Tamaño: {cola2.tamaño()}, Capacidad: {cola2.capacidad}")
    
    print("\n4. Viendo el primer elemento")
    print(f"   Primer elemento: {cola2.peek()}")
    
    print("\n5. Removiendo elementos")
    print(f"   Dequeue: {cola2.dequeue()}")
    print(f"   {cola2}")
    print(f"   Tamaño: {cola2.tamaño()}")

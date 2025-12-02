# 📤 INSTRUCCIONES PARA ENTREGA DEL PROYECTO

## 🎯 OBJETIVO

Cargar en la actividad **ÚNICAMENTE** el link de GitHub Pages donde está publicado tu blog.

---

## ✅ PASOS PARA COMPLETAR LA ENTREGA

### PASO 1: Registrarse en GitHub (si no tienes cuenta)
```
Ir a: https://github.com
Click: Sign Up
Completar: Formulario de registro
```

---

### PASO 2: Crear un Repositorio Público

**En GitHub.com:**

1. Click en el **"+"** (arriba a la derecha)
2. Selecciona **"New repository"**
3. Llena los campos:
   ```
   Repository name: proyecto-copilot
   Description: Blog Técnico de Grafos - Universidad INCCA
   Visibility: PUBLIC ⭐ (IMPORTANTE)
   ```
4. Click **"Create repository"**

---

### PASO 3: Subir tu Código a GitHub

**Abre PowerShell en tu carpeta del proyecto:**

```powershell
cd c:\Users\USER\Desktop\proyecto-copilot
```

**Ejecuta estos comandos:**

```powershell
# 1. Configurar usuario (primera vez)
git config --global user.email "tu@email.com"
git config --global user.name "Tu Nombre"

# 2. Agregar remote (reemplaza TU-USUARIO)
git remote add origin https://github.com/TU-USUARIO/proyecto-copilot.git

# 3. Cambiar a rama main
git branch -M main

# 4. Subir los archivos
git push -u origin main
```

**NOTA:** Te pedirá usuario y contraseña:
- Usuario: Tu nombre de usuario de GitHub
- Contraseña: Usa un **Personal Access Token** (ghp_...)

---

### PASO 4: Generar Personal Access Token

Si no lo tienes:

1. En GitHub: **Settings → Developer settings → Personal access tokens**
2. Click en **"Generate new token"**
3. Dale nombre: `proyecto-copilot`
4. Selecciona: ✅ `repo` y ✅ `workflow`
5. Click: **"Generate token"**
6. **Copia el token** (aparece solo una vez)
7. Usa este token como "contraseña" en git

---

### PASO 5: Habilitar GitHub Pages

**En tu repositorio de GitHub:**

1. Ve a **Settings** (pestaña de configuración)
2. En el menú izquierdo, selecciona **"Pages"**
3. En **"Source"**, elige:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click en **Save**

**GitHub generará tu sitio** ⏳ (espera 1-2 minutos)

---

### PASO 6: Obtener Tu Link

**En Settings → Pages verás:**

```
✅ Your site is live at: https://TU-USUARIO.github.io/proyecto-copilot/
```

---

## 🔗 TU LINK PARA ENTREGAR

Será algo como:
```
https://[tu-usuario-github].github.io/proyecto-copilot/
```

**Ejemplo:**
```
https://julian-suarez.github.io/proyecto-copilot/
```

---

## 📋 CHECKLIST FINAL

Antes de entregar, verifica:

- [ ] Tienes cuenta en GitHub
- [ ] Tu repositorio es **PUBLIC**
- [ ] Subiste todo con `git push`
- [ ] GitHub Pages está **habilitado**
- [ ] Tu sitio está **live** (https://...)
- [ ] Abriste el link y carga correctamente
- [ ] Los posts funcionan
- [ ] Los estilos se ven bien
- [ ] Es responsive en móvil

---

## 📤 EN LA PLATAFORMA DE ENTREGA

**En tu actividad académica:**

1. Sube **ÚNICAMENTE** el link:
   ```
   https://[tu-usuario].github.io/proyecto-copilot/
   ```

2. **NO envíes:**
   - ❌ ZIP del proyecto
   - ❌ Archivos individuales
   - ❌ El repositorio completo
   - ❌ Solo el link de GitHub (usa Pages)

3. **SÍ envía:**
   - ✅ El link de GitHub Pages
   - ✅ Nada más

---

## 🎓 INFORMACIÓN DEL PROYECTO

Tu profesor verá:

```
Proyecto: Proyecto-Copilot
Estudiante: Julián Suárez
Universidad: Universidad INCCA
Materia: Estructura de Datos
Tema: Grafos

URL: https://[tu-usuario].github.io/proyecto-copilot/
```

---

## 🆘 SI ALGO FALLA

### "El sitio no carga"
- Espera 2-5 minutos más
- Recarga con Ctrl+F5
- Verifica que el branch sea `main`

### "Ver error 404"
- Verifica que index.html está en la raíz
- Revisa que el repositorio es PUBLIC

### "Los estilos no cargan"
- Revisa la consola del navegador (F12)
- Busca errores de ruta en CSS/JS

### "No puedo subir a GitHub"
- Usa Personal Access Token (no contraseña)
- Verifica que el remote es correcto

---

## 📞 INSTRUCCIONES CLARAS

**Si tu usuario de GitHub es `julian-suarez`:**

Tu link será:
```
https://julian-suarez.github.io/proyecto-copilot/
```

**Eso es exactamente lo que entregas.**

---

## ✨ LISTO PARA ENTREGA

Una vez completes todos los pasos:

```
Tu blog estará en línea ✅
Con un link compartible ✅
Accesible desde cualquier navegador ✅
Listo para presentar ✅
```

---

**¿DUDAS CON ALGÚN PASO?**

Dime en cuál estás y te ayudaré directamente.

---

**Última actualización:** 1 de Diciembre, 2025

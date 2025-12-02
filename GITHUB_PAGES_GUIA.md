# 🌐 CONFIGURAR GITHUB PAGES

## PASOS PARA PUBLICAR TU BLOG EN GITHUB

### PASO 1: Crear una cuenta en GitHub

1. Ve a **https://github.com**
2. Click en "Sign up"
3. Completa el formulario con:
   - Email
   - Contraseña fuerte
   - Nombre de usuario (ej: julian-suarez)
4. Verifica tu email
5. Completa tu perfil

---

### PASO 2: Crear un nuevo repositorio

**Opción A: Desde GitHub (Recomendado)**

1. Inicia sesión en GitHub
2. Click en el **"+"** (esquina superior derecha)
3. Selecciona **"New repository"**
4. Completa:
   - **Repository name:** `proyecto-copilot`
   - **Description:** "Blog Técnico de Grafos - Estructura de Datos"
   - **Visibility:** Public (importante para GitHub Pages)
   - **Initialize:** No selecciones nada
5. Click en **"Create repository"**

---

### PASO 3: Conectar tu repositorio local con GitHub

En PowerShell en tu proyecto:

```powershell
# Ve a tu carpeta del proyecto
cd c:\Users\USER\Desktop\proyecto-copilot

# Añade el remoto de GitHub (reemplaza USERNAME con tu usuario)
git remote add origin https://github.com/USERNAME/proyecto-copilot.git

# Verifica que se agregó correctamente
git remote -v

# Cambia la rama a 'main' si es necesario
git branch -M main

# Sube todo a GitHub
git push -u origin main
```

**Nota:** Te pedirá autenticación. Usa:
- Usuario: Tu nombre de usuario de GitHub
- Contraseña: Un token de acceso personal (ghp_...)

---

### PASO 4: Crear Token de Acceso Personal

Si no tienes token:

1. En GitHub, ve a **Settings** → **Developer settings** → **Personal access tokens**
2. Click en **"Generate new token"**
3. Dale un nombre (ej: "proyecto-copilot")
4. Selecciona scopes: `repo` y `workflow`
5. Click en **"Generate token"**
6. **Copia el token** (no podrás verlo después)

---

### PASO 5: Habilitar GitHub Pages

1. Ve a tu repositorio en GitHub: `github.com/USERNAME/proyecto-copilot`
2. Click en **Settings** (esquina derecha)
3. En el menú izquierdo, busca **"Pages"**
4. En **"Source"**, selecciona:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click en **Save**

**GitHub creará el sitio automáticamente** ✅

---

### PASO 6: Obtener tu Link de GitHub Pages

Después de 1-2 minutos, verás en **Settings → Pages**:

```
Your site is live at: https://USERNAME.github.io/proyecto-copilot/
```

**ESE ES TU LINK PARA ENTREGAR** 🎉

---

## 📋 RESUMEN RÁPIDO

```powershell
# 1. Configurar usuario git (si es primera vez)
git config --global user.email "tu-email@ejemplo.com"
git config --global user.name "Tu Nombre"

# 2. Agregar remote (desde tu carpeta del proyecto)
cd c:\Users\USER\Desktop\proyecto-copilot
git remote add origin https://github.com/TU-USUARIO/proyecto-copilot.git

# 3. Cambiar rama a main
git branch -M main

# 4. Subir al repositorio
git push -u origin main
```

---

## 🔗 TU LINK FINAL SERÁ:

```
https://[TU-USUARIO].github.io/proyecto-copilot/
```

**Ejemplo:**
```
https://julian-suarez.github.io/proyecto-copilot/
```

---

## ⚠️ IMPORTANTE

✅ El repositorio **DEBE ser PUBLIC**  
✅ Branch debe ser **main** (no master)  
✅ Los archivos deben estar **en la raíz** o en carpeta `/docs`  
✅ El archivo **index.html** debe estar **en la raíz**  

---

## 🧪 VERIFICAR QUE TODO FUNCIONA

Una vez tengas el link:

1. Abre `https://[TU-USUARIO].github.io/proyecto-copilot/`
2. Verifica que:
   - ✅ Se carga correctamente
   - ✅ Los estilos aparecen
   - ✅ Los posts son accesibles
   - ✅ Los diagramas se ven bien
   - ✅ Es responsive en móvil

---

## 🆘 PROBLEMAS COMUNES

### "fatal: 'origin' does not appear to be a git repository"
```powershell
# Estás fuera del directorio del proyecto
cd c:\Users\USER\Desktop\proyecto-copilot
```

### "remote origin already exists"
```powershell
# El remote ya existe, actualízalo
git remote set-url origin https://github.com/TU-USUARIO/proyecto-copilot.git
```

### "Authentication failed"
- Usa un token (ghp_...) en lugar de contraseña
- O configura SSH key

### GitHub Pages no se actualiza
- Espera 2-5 minutos
- Haz un push vacío: `git push`
- Limpia caché del navegador: Ctrl+Shift+Delete

---

## 📝 CHECKPOINTS

- [ ] Tienes cuenta en GitHub
- [ ] Creaste repositorio público
- [ ] Configuraste git remote
- [ ] Hiciste `git push origin main`
- [ ] Habilitaste GitHub Pages
- [ ] Obtuviste el link https://...
- [ ] Verificaste que todo funciona

---

## 🎯 RESULTADO

Tendrás un link como:
```
https://julian-suarez.github.io/proyecto-copilot/
```

**Que puedas compartir y entregar a tu profesor** ✅

---

¿NECESITAS AYUDA CON ALGÚN PASO?

Dime en qué parte estás y te ayudaré.

# Proyecto-ADS

Este proyecto es una aplicación web básica que utiliza tecnologías como HTML, Node.js, Apache y MySQL. Está diseñado para ejecutarse en un entorno de desarrollo local con XAMPP y nodemon.

## Requisitos previos

1. **Instalar Node.js**  
    Descarga e instala Node.js desde [Node.js](https://nodejs.org). Esto instalará automáticamente npm (Node Package Manager).
	Para windows sigue los siguientes pasos: 
	#### Instala con PowerShell.exe (Como administrador)

- Run `Get-ExecutionPolicy`. Si te retorna `Restricted`, entonces run `Set-ExecutionPolicy AllSigned` o `Set-ExecutionPolicy Bypass -Scope Process`.
- Ahorra corre el siguiente comando:
	`Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))`    
	Despues  instala en el mismo PowerShell: 
	`choco install fnm`
	Verifica el fnm: 
	`fnm --version`
	Despues en el PowerShell ejecuta: 
	https://nodejs.org/en/download/package-manager
1. **Instalar XAMPP**  
    Descarga e instala XAMPP desde XAMPP. Esto incluye Apache y MySQL.
    
3. **Instalar nodemon**  
    Instala nodemon globalmente con npm:
    PowerShell
    `npm install -g nodemon`
    

## Instalación del proyecto

1. **Clonar el repositorio**  
    Clona este proyecto en tu máquina local:
    `git clone https://github.com/samtrexx/Proyecto-ADS.git cd Proyecto-ADS`
    
2. **Instalar dependencias**  
    Si el proyecto tiene un archivo `package.json`, instala las dependencias con:

    `npm install`
    
3. **Configurar XAMPP**
    
    - Inicia el servidor Apache y MySQL desde el panel de control de XAMPP.
    - Crea una base de datos en MySQL 
    - http://localhost/phpmyadmin/
  
      
	
		![Descripción de la imagen](https://i.imgur.com/pbs3fPU.png)

		nombre de la tabla: users 
		Numero de columnas: 3

		![Descripción de la imagen](https://i.imgur.com/9QrKqfm.png)

		Sigue el siguiente formato de imagen
		
		![Descripción de la imagen](https://i.imgur.com/KIemk46.png)

		En el caso de "id" en "nulo indice" selecciona continuar

		![Descripción de la imagen](https://i.imgur.com/ZurzLVW.png)

## Uso

1. **Iniciar el servidor Node.js**  
    Usa nodemon para ejecutar el servidor automáticamente:
    `cd C:\localiza tu proyecto`
    `nodemon <archivo-principal>.js`
    
2. **Abrir la aplicación web**  
    Accede a la aplicación desde tu navegador en http://localhost:5000/

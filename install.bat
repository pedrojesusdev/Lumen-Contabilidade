@echo off
REM Script de Instalação Automática - Windows
REM Lúmen Contabilidade Enterprise

echo.
echo ========================================
echo   Instalacao Lumen Contabilidade
echo ========================================
echo.

REM Verificar Node.js
echo [1/7] Verificando Node.js...
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERRO] Node.js nao encontrado!
    echo Por favor, instale Node.js 18+ de https://nodejs.org
    pause
    exit /b 1
)
node -v
echo [OK] Node.js encontrado!
echo.

REM Verificar npm
echo [2/7] Verificando npm...
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERRO] npm nao encontrado!
    pause
    exit /b 1
)
npm -v
echo [OK] npm encontrado!
echo.

REM Limpar instalações anteriores
echo [3/7] Limpando instalacoes anteriores...
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del /q package-lock.json
if exist .next rmdir /s /q .next
echo [OK] Limpeza concluida!
echo.

REM Criar pastas necessárias
echo [4/7] Verificando estrutura de pastas...
if not exist hooks mkdir hooks
if not exist components\pages mkdir components\pages
if not exist components\css mkdir components\css
if not exist public\images mkdir public\images
echo [OK] Pastas verificadas!
echo.

REM Instalar dependências
echo [5/7] Instalando dependencias...
echo Isso pode levar alguns minutos...
echo.
call npm install --legacy-peer-deps

if %ERRORLEVEL% NEQ 0 (
    echo [AVISO] Erro na instalacao, tentando com --force...
    call npm install --legacy-peer-deps --force
)

echo.
echo [OK] Dependencias instaladas!
echo.

REM Verificar instalação
echo [6/7] Verificando instalacao...
if not exist node_modules (
    echo [ERRO] Falha na instalacao!
    pause
    exit /b 1
)
echo [OK] node_modules criado!
echo.

REM Teste final
echo [7/7] Instalacao concluida!
echo.
echo ========================================
echo   INSTALACAO CONCLUIDA COM SUCESSO!
echo ========================================
echo.
echo Para iniciar o servidor:
echo   npm run dev
echo.
echo Depois, abra no navegador:
echo   http://localhost:3000
echo.
echo Comandos uteis:
echo   npm run dev    - Servidor de desenvolvimento
echo   npm run build  - Build para producao
echo   npm start      - Servidor de producao
echo.
pause

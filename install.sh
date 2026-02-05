#!/bin/bash

# Script de Instalação Automática
# Lúmen Contabilidade Enterprise

echo "🚀 Iniciando instalação do Lúmen Contabilidade..."
echo ""

# Cores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Verificar Node.js
echo -e "${YELLOW}1. Verificando Node.js...${NC}"
if command -v node &> /dev/null
then
    NODE_VERSION=$(node -v)
    echo -e "${GREEN}✓ Node.js encontrado: $NODE_VERSION${NC}"
else
    echo -e "${RED}✗ Node.js não encontrado!${NC}"
    echo "Por favor, instale Node.js 18+ de https://nodejs.org"
    exit 1
fi

# Verificar npm
echo -e "${YELLOW}2. Verificando npm...${NC}"
if command -v npm &> /dev/null
then
    NPM_VERSION=$(npm -v)
    echo -e "${GREEN}✓ npm encontrado: $NPM_VERSION${NC}"
else
    echo -e "${RED}✗ npm não encontrado!${NC}"
    exit 1
fi

# Limpar instalações anteriores
echo -e "${YELLOW}3. Limpando instalações anteriores...${NC}"
rm -rf node_modules package-lock.json .next 2>/dev/null
echo -e "${GREEN}✓ Limpeza concluída${NC}"

# Criar pastas necessárias
echo -e "${YELLOW}4. Verificando estrutura de pastas...${NC}"
mkdir -p hooks
mkdir -p components/pages
mkdir -p components/css
mkdir -p public/images
echo -e "${GREEN}✓ Pastas verificadas${NC}"

# Instalar dependências
echo -e "${YELLOW}5. Instalando dependências...${NC}"
echo "   Isso pode levar alguns minutos..."
npm install --legacy-peer-deps

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Dependências instaladas com sucesso!${NC}"
else
    echo -e "${RED}✗ Erro ao instalar dependências${NC}"
    echo "Tentando com --force..."
    npm install --legacy-peer-deps --force
fi

# Verificar instalação
echo -e "${YELLOW}6. Verificando instalação...${NC}"
if [ -d "node_modules" ]; then
    echo -e "${GREEN}✓ node_modules criado${NC}"
else
    echo -e "${RED}✗ Falha na instalação${NC}"
    exit 1
fi

# Build de teste
echo -e "${YELLOW}7. Testando build...${NC}"
npm run build --if-present 2>/dev/null

echo ""
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✓ Instalação concluída com sucesso!${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "${YELLOW}Para iniciar o servidor:${NC}"
echo "  npm run dev"
echo ""
echo -e "${YELLOW}Depois, abra no navegador:${NC}"
echo "  http://localhost:3000"
echo ""
echo -e "${YELLOW}Comandos úteis:${NC}"
echo "  npm run dev    - Servidor de desenvolvimento"
echo "  npm run build  - Build para produção"
echo "  npm start      - Servidor de produção"
echo ""

# 🌟 Lúmen Contabilidade Enterprise

Site institucional desenvolvido em Next.js 15 com TypeScript e CSS Modules.

## 🎨 Características

- ✅ Design moderno e corporativo
- ✅ Paleta de cores extraída das logos da empresa
- ✅ Animações CSS avançadas e microinterações
- ✅ Totalmente responsivo (mobile-first)
- ✅ SEO otimizado
- ✅ Navegação suave entre seções
- ✅ Componentes reutilizáveis e bem estruturados

## 🚀 Tecnologias

- **Next.js 15** (App Router)
- **TypeScript**
- **CSS Modules** (sem frameworks CSS)
- **React 19**

## 📁 Estrutura do Projeto

```
lumen-contabilidade/
├── app/
│   ├── globals.css          # Estilos globais e variáveis CSS
│   ├── layout.tsx            # Layout principal
│   └── page.tsx              # Página principal
├── components/
|   └──css/
│       ├── About.module.css
│       ├── Contact.module.css
│       └── Footer.module.css
|    └──pages/
│       ├── Header.module.css
│       ├── Hero.module.css
│       ├── Services.module.css
│       ├── About.tsx             # Seção Sobre
│       ├── Contact.tsx           # Seção Contato
│       ├── Footer.tsx            # Rodapé
│       ├── Header.tsx            # Navegação
│       ├── Hero.tsx              # Hero section
│       └── Services.tsx          # Seção Serviços
├── public/
│   └── images/
│       ├── logo.png          # Logo principal
│       └── logo-blue.png     # Logo com fundo azul
├── package.json
├── tsconfig.json
└── next.config.js
```

## 🎯 Seções do Site

### 1. **Header (Navegação)**
- Logo da empresa
- Menu de navegação com scroll suave
- CTA destacado

### 2. **Hero Section**
- Título impactante com destaque gradiente
- Subtítulo explicativo
- Dois botões de ação (primário e secundário)
- Métricas rápidas (anos de experiência, clientes, satisfação)
- Elementos visuais animados de fundo
- Ícone SVG personalizado
- Indicador de scroll animado

### 3. **Sobre**
- Texto institucional profissional
- 4 features em grid com ícones:
  - Excelência Técnica
  - Agilidade
  - Segurança
  - Atendimento Personalizado
- Estatísticas em destaque (anos, clientes, profissionais, satisfação)

### 4. **Serviços**
- 6 cards interativos com hover avançado:
  - Contabilidade Empresarial
  - Planejamento Tributário
  - BPO Financeiro
  - Consultoria Empresarial
  - Departamento Pessoal
  - Abertura de Empresas
- CTA adicional ao final

### 5. **Contato**
- Formulário funcional com validação
- Informações de contato:
  - E-mail
  - Telefone
  - Endereço
  - Horário de funcionamento
- Feedback visual ao enviar

### 6. **Footer**
- Logo e descrição
- Links de navegação
- Links de serviços
- Informações de contato
- Redes sociais
- Copyright

## 🎨 Paleta de Cores

Cores extraídas diretamente das logos:

```css
--color-primary: #6BA3D0;        /* Azul claro */
--color-primary-dark: #1E5A7D;   /* Azul escuro/corporativo */
--color-primary-medium: #4A8BBF; /* Azul médio */
--color-secondary: #2C2C2C;      /* Cinza escuro */
--color-gray-light: #F5F7FA;
--color-gray-medium: #E1E8ED;
--color-gray-dark: #6C757D;
```

## ⚡ Animações Implementadas

- **fadeInUp** - Entrada suave de elementos
- **fadeIn** - Aparecimento gradual
- **slideInLeft/Right** - Entrada lateral
- **float** - Flutuação contínua
- **pulse** - Pulsação sutil
- **Hover effects** - Transformações, sombras, cores
- **Scroll indicator** - Animação do mouse

## 📱 Responsividade

- **Desktop**: Layout em grid completo
- **Tablet** (< 968px): Grid adaptado
- **Mobile** (< 768px): Layout em coluna única
- **Small Mobile** (< 480px): Otimizações adicionais

## 🛠️ Instalação e Uso

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação

```bash
# Instalar dependências
npm install

# ou
yarn install
```

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Build para Produção

```bash
# Criar build otimizado
npm run build

# Iniciar servidor de produção
npm start
```

## 📊 Performance

- Lazy loading de imagens
- CSS Modules (sem CSS não utilizado)
- Componentes otimizados
- Sem bibliotecas CSS pesadas

## 🤝 Suporte

Para dúvidas ou sugestões sobre o código, consulte a documentação do Next.js:
- [Documentação Next.js](https://nextjs.org/docs)
- [TypeScript](https://www.typescriptlang.org/)

---

Desenvolvido para **Lúmen Contabilidade Enterprise**

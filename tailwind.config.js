// tailwind.config.js

module.exports = {
    // Defina onde o Tailwind deve procurar por classes CSS
    content: [
      './index.html',  // Adicione o caminho para o seu arquivo HTML principal
      './src/**/*.{js,jsx,ts,tsx}',  // Adicione os diretórios e extensões que contêm arquivos que usam as classes do Tailwind
    ],
    theme: {
      extend: {
        // Adicione personalizações aqui, como cores, fontes, tamanhos, etc.
        colors: {
          customBlue: '#1e40af', // Exemplo de cor personalizada
        },
        fontFamily: {
          sans: ['Helvetica', 'Arial', 'sans-serif'],  // Exemplo de fonte personalizada
        },
      },
    },
    plugins: [
      // Se necessário, adicione plugins do Tailwind aqui
    ],
    // Ativar ou desativar recursos adicionais do Tailwind (como modo escuro, etc.)
    darkMode: 'media',  // Usar o modo escuro com base nas preferências do usuário
  }
  
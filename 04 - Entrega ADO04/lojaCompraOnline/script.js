// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(nomeProduto, precoProduto) {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push({ nome: nomeProduto, preco: precoProduto });
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarCarrinho();
}

// Função para finalizar a compra (limpar carrinho)
function finalizarCompra() {
    localStorage.removeItem('carrinho');
    atualizarCarrinho();
}

// Função para atualizar o conteúdo do carrinho na página
function atualizarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const cartItemsElement = document.getElementById('cart-items');
    let total = 0;

    // Limpar itens do carrinho
    cartItemsElement.innerHTML = '';

    // Adicionar itens do carrinho à lista e calcular o total
    carrinho.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        cartItemsElement.appendChild(listItem);
        total += item.preco;
    });

    // Atualizar total
    const totalElement = document.getElementById('total');
    totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;

    // Login
    function validateForm() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var error = document.getElementById("error");
    
        // Verificar se os campos estão preenchidos
        if (username.trim() === '' || password.trim() === '') {
            error.textContent = "Por favor, preencha todos os campos.";
            return false;
        }
    
        // Se todos os campos estiverem preenchidos, o formulário será enviado
        return true;
    }

    function validateForm() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var error = document.getElementById("error");
    
        // Verificar se os campos estão preenchidos
        if (username.trim() === '' || password.trim() === '') {
            error.textContent = "Por favor, preencha todos os campos.";
            return false;
        }
        var loggedIn = validateForm();
        if (!loggedIn) {
            // Mostra o formulário de cadastro se o usuário não estiver logado
            document.getElementById("cadastro-form").style.display = "block";
        } else {
            // Lógica para finalizar a compra
            console.log("Compra finalizada!");
        }
    
        // Se todos os campos estiverem preenchidos, o formulário será enviado
        return true;
    }
    
    function cadastrarUsuario() {
        var nome = document.getElementById("nome").value;
        var email = document.getElementById("email").value;
        var endereco = document.getElementById("endereco").value;
    
        // Aqui você pode fazer algo com os dados do cadastro, como enviar para o servidor
        console.log("Nome: " + nome);
        console.log("Email: " + email);
        console.log("Endereço: " + endereco);
    
        // Oculta o formulário de cadastro após enviar
        document.getElementById("cadastro-form").style.display = "none";
    
        // Retorna falso para evitar que o formulário seja enviado
        return false;
    }
    
    
    
}
// Atualizar carrinho quando a página carrega
window.onload = atualizarCarrinho;

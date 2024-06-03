document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    cadastrarUsuario();
});


// Função para cadastrar usuário
function cadastrarUsuario() {
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var senha = document.getElementById("senha").value;
    var confirmarSenha = document.getElementById("confirmar-senha").value;
    var dataNascimento = document.getElementById("data-nascimento").value;
    var documento = document.getElementById("documento").value;

    // Verificação de campos obrigatórios
    if (nome === "" || sobrenome === "" || email === "" || telefone === "" || senha === "" || confirmarSenha === "" || dataNascimento === "" || documento === "") {
        document.getElementById("mensagem-cadastro").innerText = "Todos os campos são obrigatórios.";
        return;
    } else {
        document.getElementById("mensagem-cadastro").innerText = "Cadastro realizado com sucesso";
    }

    // Verificação de senha
    if (senha !== confirmarSenha) {
        document.getElementById("mensagem-cadastro").innerText = "As senhas não coincidem.";
        return;
    }

    // Verificação de idade mínima
    var dataMinima = new Date();
    dataMinima.setFullYear(dataMinima.getFullYear() - 18);
    var dataNascimentoDate = new Date(dataNascimento);
    if (isNaN(dataNascimentoDate) || dataNascimentoDate > dataMinima) {
        document.getElementById("mensagem-cadastro").innerText = "Você deve ter pelo menos 18 anos para se cadastrar.";
        return;
    }

    // Envie os dados para o backend (se necessário)
    // Aqui você pode adicionar o código para enviar os dados para o CadastroServlet
    document.getElementById("login-form").submit();
}

function isNumeric(str) {
    return /^\d+$/.test(str);
}

document.getElementById("telefone").addEventListener("input", function() {
    if (!isNumeric(this.value)) {
        this.value = this.value.slice(0, -1);
    }
});

document.getElementById("documento").addEventListener("input", function() {
    if (!isNumeric(this.value)) {
        this.value = this.value.slice(0, -1);
    }
});

function loginUser(nome, email, dataNascimento, genero, nacionalidade) {
    localStorage.setItem("nome", nome);
    localStorage.setItem("email", email);
    localStorage.setItem("dataNascimento", dataNascimento);
    localStorage.setItem("genero", genero);
    localStorage.setItem("nacionalidade", nacionalidade);
    window.location.href = "perfil.html";
}

document.addEventListener("DOMContentLoaded", function() {
    // Função para verificar se o usuário está logado e atualizar o botão de login
    function atualizarBotaoLogin() {
        var perfilBtn = document.getElementById("perfil-btn");
        var nomeUsuario = localStorage.getItem("nome");

        if (perfilBtn) {
            if (nomeUsuario) {
                perfilBtn.textContent = "Perfil"; // Altera o texto do botão para "Perfil"
                perfilBtn.href = "perfil.html"; // Altera o link do botão para a página de perfil
            } else {
                perfilBtn.textContent = "Login"; // Altera o texto do botão para "Login"
                perfilBtn.href = "login.html"; // Altera o link do botão para a página de login
            }
        }
    }

    // Atualizar o botão de login quando a página for carregada
    atualizarBotaoLogin();

    // Adicionar evento de clique ao botão de login
    var perfilBtn = document.getElementById("perfil-btn");
    perfilBtn.addEventListener("click", function(event) {
        if (perfilBtn.textContent === "Login") {
            window.location.href = "login.html";
        } else if (perfilBtn.textContent === "Perfil") {
            window.location.href = "perfil.html";
        }
    });

    // Adicionar evento de clique ao botão de logout, se existir
    var logoutBtn = document.getElementById("logout-btn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function() {
            localStorage.clear(); // Limpar o localStorage
            window.location.href = "index.html"; // Redirecionar para a página principal
        });
    }
});

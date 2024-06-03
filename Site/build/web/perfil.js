document.addEventListener("DOMContentLoaded", function() {
    // Função para buscar informações do usuário e exibir na página
    function carregarInfoUsuario() {
        var nomeSpan = document.getElementById("nome");
        var emailSpan = document.getElementById("email");
        var dataNascimentoSpan = document.getElementById("data-nascimento");
        var generoSpan = document.getElementById("genero");
        var nacionalidadeSpan = document.getElementById("nacionalidade");

        // Fazer uma solicitação AJAX para o servidor para obter os dados do usuário
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "perfil-info", true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var data = JSON.parse(xhr.responseText);
                nomeSpan.textContent = data.nome;
                emailSpan.textContent = data.email;
                dataNascimentoSpan.textContent = data.dataNascimento;
                generoSpan.textContent = data.genero;
                nacionalidadeSpan.textContent = data.nacionalidade;
            }
        };
        xhr.send();
    }

    carregarInfoUsuario();

    // Adicionar evento de clique ao botão de logout
    var logoutBtn = document.getElementById("logout-btn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function() {
            localStorage.clear(); // Limpar o localStorage
            window.location.href = "index.html"; // Redirecionar para a página principal
        });
    }

    var inicioBtn = document.getElementById("inicio-btn");
    if (inicioBtn) {
        inicioBtn.addEventListener("click", function() {
            window.location.href = "index.html"; // Redirecionar para a tela inicial
        });
    }
});

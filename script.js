// === SE TIVER O BOTÃO 'bt1' NA TELA, SIGNIFICA QUE ESTAMOS NO INDEX ===
if (document.getElementById('bt1')) {
    let bt1 = document.getElementById('bt1')
    let bt2 = document.getElementById('bt2')
    let s1 = document.getElementById('s1')
    let s2 = document.getElementById('s2')
    let s3 = document.getElementById('s3')
    let buar = document.getElementById('buar')
    let dv1area = document.getElementById('dv1area')
    let dv2area = document.getElementById('dv2area')
    let vl = document.getElementById('vl')
    let s1dv1 = document.getElementById('s1dv1')
    let s1dv2 = document.getElementById('s1dv2')
    let body = document.getElementById('body')
    let nav = document.querySelector('nav')


    // === CARREGAR TODOS OS ELEMENTOS SALVOS ===
        for (let c = 1; c > 0; c++) {
        let redacaoSalva = localStorage.getItem('in12' + c)
        let descricaor = localStorage.getItem('in22' + c)
        
        if (redacaoSalva === null){
            break
        }

        let resultadodescricaor = ''
        if (descricaor != null) {
            resultadodescricaor = descricaor.substring(0, 20) + '...'
        }

        let novadivr = document.createElement('div')
        let novah1r = document.createElement('h1')
        let novopr = document.createElement('p')
        let novobotaor = document.createElement('button')
        let novobotaovr = document.createElement('button')

        novobotaor.textContent = 'Remover'
        novobotaovr.textContent = 'Ver arquivo'

        novah1r.textContent = redacaoSalva
        novopr.textContent = resultadodescricaor
        
        s1dv2.appendChild(novadivr) 
        novadivr.appendChild(novah1r)
        novadivr.appendChild(novopr)
        novadivr.appendChild(novobotaor)
        novadivr.appendChild(novobotaovr)

        novadivr.setAttribute('class', 'novadiv')

        novobotaor.addEventListener('click', () => {
            localStorage.removeItem('in12' + c)
            localStorage.removeItem('in22' + c)
            novadivr.remove()
        })

        novobotaovr.addEventListener('click', () => {
            localStorage.setItem('titulo_temporario', redacaoSalva)
            localStorage.setItem('descricao_temporaria', descricaor)

            localStorage.setItem('identificacao', 'r')
            window.location.href = "ver.html" 
        })
    }
    
    // Loop 1: REDAÇÕES (Puxa in12 e in22 -> Mostra na caixa de Redações s1dv2)
    
    
    // Loop 2: LIVROS (Puxa in11 e in21 -> Mostra na caixa de Livros s1dv1)
    for (let c = 1; c > 0; c++) {
        let libroSalva = localStorage.getItem('in11' + c)
        let descricaol = localStorage.getItem('in21' + c)

        if (libroSalva === null){  
            break
        }

        let resultadodescricaol = ''
        if (descricaol != null){
            resultadodescricaol = descricaol.substring(0, 20) + '...'
        }

        let novadivl = document.createElement('div')
        let novah1l = document.createElement('h1')
        let novopl = document.createElement('p')
        let novobotaol = document.createElement('button')
        let novobotaovl = document.createElement('button') 

        novobotaol.textContent = 'Remover'
        novobotaovl.textContent = 'Ver arquivo'

        novah1l.textContent = libroSalva
        novopl.textContent = resultadodescricaol
        
        s1dv1.appendChild(novadivl) 
        novadivl.appendChild(novah1l)
        novadivl.appendChild(novopl)
        novadivl.appendChild(novobotaol)
        novadivl.appendChild(novobotaovl)

        novadivl.setAttribute('class', 'novadiv')

        novobotaol.addEventListener('click', () => {
            localStorage.removeItem('in11' + c)
            localStorage.removeItem('in21' + c)
            novadivl.remove()
        })

        novobotaovl.addEventListener('click', () => {
            localStorage.setItem('titulo_temporario', libroSalva)
            localStorage.setItem('descricao_temporaria', descricaol)
            localStorage.setItem('identificacao', 'l')
            window.location.href = "ver.html"
        })
    }


    bt1.style.backgroundColor = 'var(--cor2)'

    bt1.addEventListener('click', () => {
        bt1.style.backgroundColor = 'var(--cor2)'
        bt2.style.backgroundColor = 'var(--cor1)'
        s1.style.display = 'block'
        s2.style.display = 'none'
        s3.style.display = 'none'
    })

    bt2.addEventListener('click', () => {
        bt1.style.backgroundColor = 'var(--cor1)'
        bt2.style.backgroundColor = 'var(--cor2)'
        s1.style.display = 'none'
        s2.style.display = 'block'
        s3.style.display = 'none'
    })

    dv1area.addEventListener('click', () => {
        window.location.href = "paginaedicao.html"
    })

    dv2area.addEventListener('click', () => {
        window.location.href = "paginaedicao.html"
    })

    buar.addEventListener('click', () => {
        s1.style.display = 'none'
        s2.style.display = 'none'
        s3.style.display = 'block'
    })

    vl.addEventListener('click', () => {
        bt1.style.backgroundColor = 'var(--cor2)'
        bt2.style.backgroundColor = 'var(--cor1)'
        s1.style.display = 'block'
        s2.style.display = 'none'
        s3.style.display = 'none'
    })

        let menu = document.getElementById('menu')
        

    if (menu) { // Proteção para só rodar se o botão menu existir na tela
        menu.addEventListener('click', () => {
            if (nav.style.left == '0px'){
                nav.style.left = '-255px'
            } else {
                nav.style.left = '0px'
            }
        })
    }


// === SE TIVER O BOTÃO 'bus1' NA TELA, SIGNIFICA QUE ESTAMOS NA PAGINA DE EDIÇÃO ===
} else if (document.getElementById('bus1')) {
    let bul = document.getElementById('bul')
    let bur = document.getElementById('bur')
    let s1pe = document.getElementById('s1pe')
    let bd = document.getElementById('bd')
    let s1 = document.getElementById('s1')
    let s2 = document.getElementById('s2')
    let voltar = document.getElementById('voltar')

    s1.style.display = 'none'
    s2.style.display = 'none'

    bul.addEventListener('click', () => {
        s1pe.style.display = 'none'
        s1.style.display = 'block'
        s2.style.display = 'none'

        // CORREÇÃO: Força o recálculo da altura do texto assim que a tela abre
        const txtLivro = document.getElementById('in21');
        if(txtLivro) {
            txtLivro.style.height = 'auto';
            txtLivro.style.height = txtLivro.scrollHeight + 'px';
        }
    })

    bur.addEventListener('click', () => {
        s1pe.style.display = 'none'
        s1.style.display = 'none'
        s2.style.display = 'block'

        // CORREÇÃO: Força o recálculo da altura do texto assim que a tela abre
        const txtRedacao = document.getElementById('in22');
        if(txtRedacao) {
            txtRedacao.style.height = 'auto';
            txtRedacao.style.height = txtRedacao.scrollHeight + 'px';
        }
    })

    voltar.addEventListener('click', () => {
        window.location.href = 'index.html'
    })

    let bus1 = document.getElementById('bus1')
    let bus2 = document.getElementById('bus2')
    let in11 = document.getElementById('in11')
    let in21 = document.getElementById('in21')
    let in12 = document.getElementById('in12')
    let in22 = document.getElementById('in22')

    if (localStorage.getItem('identificacao') == 'l'){
        in11.value = localStorage.getItem('editarh1')
        in21.value = localStorage.getItem('editarp')

        s1pe.style.display = 'none'
        s1.style.display = 'block'
        s2.style.display = 'none'

    }else if (localStorage.getItem('identificacao') == 'r'){
        in12.value = localStorage.getItem('editarh1')
        in22.value = localStorage.getItem('editarp')

        s1pe.style.display = 'none'
        s1.style.display = 'none'
        s2.style.display = 'block'
    }


    bus1.addEventListener('click', () => {
        if (in11.value != 0 || in21.value != 0) {
            for (let c = 1; c > 0; c++) {
                if (localStorage.getItem('in11' + c) === null) {
                    localStorage.setItem('in11' + c, in11.value)
                    localStorage.setItem('in21' + c, in21.value)
                    break; 
                }
            }
            in11.value = ''
            in21.value = ''
            s1pe.style.display = 'block'
            s1.style.display = 'none'
            s2.style.display = 'none'
        } else {
            alert('[ERRO] Digite algo na redação')
        }  
    })

    bus2.addEventListener('click', () => {
        if (in12.value != 0 || in22.value != 0) {
            for (let c = 1; c > 0; c++) {
                if (localStorage.getItem('in12' + c) === null) {
                    localStorage.setItem('in12' + c, in12.value)
                    localStorage.setItem('in22' + c, in22.value)
                    break;
                }
            }
            in12.value = ''
            in22.value = ''
            s1pe.style.display = 'block'
            s1.style.display = 'none'
            s2.style.display = 'none'
        } else {
            alert('[ERRO] Digite algo na redação')
        }
    })

    
    // CORREÇÃO: Captura TODAS as caixas com querySelectorAll e ativa o EventListener correto com "L" maiúsculo
    const caixasTexto = document.querySelectorAll('.in2');
    caixasTexto.forEach(caixa => {
        caixa.addEventListener('input', function() {
            this.style.height = 'auto'; 
            this.style.height = this.scrollHeight + 'px'; 
        });
    });

    const caixasTitulo = document.querySelectorAll('.in1');
    caixasTitulo.forEach(caixa => {
        caixa.addEventListener('input', function() {
            this.style.height = 'auto'; 
            this.style.height = this.scrollHeight + 'px'; 
        });
    });

// === SE ESTIVERMOS NA ÁREA DE VISUALIZAÇÃO COMPLETA DO ARQUIVO ===
} else if (document.getElementById('bodyver')){
    let bodyver = document.getElementById('bodyver')

    let h1 = document.createElement('h1')
    let p = document.createElement('p')
    let editar = document.createElement('button')

    bodyver.appendChild(h1)
    bodyver.appendChild(p)
    bodyver.appendChild(editar) // CORREÇÃO: Corrigido o erro de digitação da linha 245 anterior

    h1.textContent = localStorage.getItem('titulo_temporario')
    p.textContent = localStorage.getItem('descricao_temporaria')
    editar.textContent = 'Editar'

    let button = document.createElement('button')
    button.textContent = 'Sair'
    bodyver.appendChild(button) 

    button.addEventListener('click', () => {
        localStorage.removeItem('titulo_temporario')
        localStorage.removeItem('descricao_temporaria')
        window.location.href = 'index.html'
    })

    editar.addEventListener('click', () => {
        localStorage.setItem('editarh1', localStorage.getItem('titulo_temporario'))
        localStorage.setItem('editarp', localStorage.getItem('descricao_temporaria'))

        window.location.href = 'paginaedicao.html'
    })
    
    h1.setAttribute('id', 'h1especial')
    p.setAttribute('id', 'pespecial')
}
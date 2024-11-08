const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

// configuração do diretorio dos partials
const hbs = exphbs.create({
    partialsDir: ['views/partials'],
})

// definição do template egine
app.engine('handlebars',hbs.engine)
app.set('view engine','handlebars')

// configuração do diretorio com os arquivos estaticos. exemplo: css e etc
app.use(express.static('public'))

const port = 3000
app.listen(port, () => {console.log('servidor rodando')})

app.get('/',(req,res) => {
    const produtos = [
        {
            id: 1,
            nome: 'moto g8',
            preco: 1000,
        },
        {
            id: 2,
            nome: 'monitor 24',
            preco: 1200,
        },
        {
            id: 3,
            nome: 'fonte atx',
            preco: 250,
        },
    ]
    res.render("home",{produtos})
})

app.get('/detalhes/:id',(req,res) => {
    const id = req.params.id
    const produtoDetalhe = {
        id: '',
        nome: '',
        categoria: '',
        preco: '',
        fabricante: '',
        estoque: ''
    }
    
    if(id === '1'){
        produtoDetalhe.id = id
        produtoDetalhe.nome = 'moto g8'
        produtoDetalhe.categoria = 'celular'
        produtoDetalhe.preco = '1000'
        produtoDetalhe.fabricante = 'motorola'
        produtoDetalhe.estoque = '100'
    }else if(id === '2'){
        produtoDetalhe.id = id
        produtoDetalhe.nome = 'monitor 24'
        produtoDetalhe.categoria = 'monitor'
        produtoDetalhe.preco = '1200'
        produtoDetalhe.fabricante = 'LG'
        produtoDetalhe.estoque = '80'
    }else if(id === '3'){
        produtoDetalhe.id = id
        produtoDetalhe.nome = 'fonte atx'
        produtoDetalhe.categoria = 'peça de pc'
        produtoDetalhe.preco = '250'
        produtoDetalhe.fabricante = 'fonte da boa'
        produtoDetalhe.estoque = '40'
    }
    res.render('detalhes',{produtoDetalhe})
})
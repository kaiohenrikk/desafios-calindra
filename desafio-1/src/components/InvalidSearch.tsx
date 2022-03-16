export default function InvalidSearch() {
    return (
        <div className="invalidSearch">
            <h1>poxa, não encontramos nenhum resultado para essa pesquisa</h1>
            <h2>Que tal pesquisar de novo seguindo as dicas abaixo? ;)</h2>
            <div id="helpList">
                <ul>
                    <li>Confira se o termo foi digitado certinho;</li>
                    <li>Use menos palavras ou termos menos específicos;</li>
                    <li>Tente outro produto.</li>
                </ul>
            </div>
            <div className="helpOptions">
                <div className="options">
                    <h2 className="optionsText">precisa de ajuda? fala com a gente</h2>
                    <p className="optionsText">
                        Nosso atendimento é de segunda a sexta, das 8h às 20h, e sábado, das
                        8h às 18h :)
                    </p>
                </div>
                <div className="options">
                    <h2 className="optionsText">por telefone:</h2>
                    <p className="optionsText">
                        Capitais e regiões metropolitanas: 4003-4848*
                        <br />
                        Estado do Rio de Janeiro: 0800 229 4848
                        <br />
                        Outras regiões: 041 11 4003-4848*
                        <br />
                    </p>
                </div>
                <div className="options">
                    <h2 className="optionsText">por e-mail:</h2>
                    <p className="optionsText">atendimento.acom@americanas.com</p>
                    <p className="optionsText">
                        Se preferir, acesse nossas <a href="/">perguntas frequentes</a> ;)
                    </p>
                </div>
            </div>
        </div>
    );
}
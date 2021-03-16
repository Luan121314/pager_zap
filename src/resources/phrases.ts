const phrases = [
    {
        "author": "Provérbio japonês",
        "phrase": "Pouco se aprende com a vitória, mas muito com a derrota."
    },
    {
        "author": "Honoré de Balzac",
        "phrase": "O homem começa a morrer na idade em que perde o entusiasmo."
    },
    {
        "author": "Victor Hugo",
        "phrase": "Todo o inferno está contido nesta única palavra: solidão."
    },
    {
        "author": "Fiódor Dostoiévski",
        "phrase": "Não há assunto tão velho que não possa ser dito algo de novo sobre ele."
    },
    {
        "author": "Confúcio",
        "phrase": "Quando os médicos diferem, o paciente morre."
    },
    {
        "author": "Sêneca",
        "phrase": "Ninguém chegou a ser sábio por acaso."
    },
    {
        "author": "Pitágoras",
        "phrase": "Despreza as estradas largas, segue os carreiros."
    },
    {
        "author": "Ralph Waldo Emerson",
        "phrase": "É prova de alta cultura dizer as coisas mais profundas, do modo mais simples."
    },
    {
        "author": "Victor Hugo",
        "phrase": "O sábio sabe que ignora."
    },
    {
        "author": "Roberto Simonsen",
        "phrase": "Otimismo é esperar pelo melhor. Confiança é saber lidar com o pior."
    },
    {
        "author": "William Shakespeare",
        "phrase": "O amor é muito jovem para saber o que é consciência."
    },
    {
        "author": "Voltaire",
        "phrase": "Conquistar não é suficiente. É preciso saber seduzir."
    },
    {
        "author": "Clarice Lispector",
        "phrase": "Queria saber: depois que se é feliz o que acontece? O que vem depois?"
    },
    {
        "author": "Desconhecido",
        "phrase": "Não saber explicar o que se sente por quem você quer a todo momento, é amar."
    },
    {
        "author": "Martha Medeiros",
        "phrase": "Saudade é nunca mais querer saber de quem se ama, e ainda assim, doer."
    },
    {
        "author": "Sócrates",
        "phrase": "Todo o meu saber consiste em saber que nada sei."
    },
    {
        "author": "Aristóteles",
        "phrase": "O segredo do sucesso é saber algo que ninguém mais sabe."
    },
    {
        "author": "Fernando Anitelli",
        "phrase": "Descobrir o verdadeiro sentido das coisas é querer saber demais!"
    },
    {
        "author": "William Shakespeare",
        "phrase": "\"Sem saber amar não adianta amar profundamente.\""
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Não jogue nada pela janela sem antes saber a razão."
    },
    {
        "author": "Laurence Sterne",
        "phrase": "A solidão é a mãe da sabedoria."
    },
    {
        "author": "Francis Bacon",
        "phrase": "Uma pergunta prudente é metade da sabedoria."
    },
    {
        "author": "Píndaro",
        "phrase": "O silêncio é a maior sabedoria do homem."
    },
    {
        "author": "John Collins",
        "phrase": "Aproveitar um bom conselho requer mais sabedoria do que dá-lo."
    },
    {
        "author": "Nicolau Copérnico",
        "phrase": "A sabedoria da natureza é tal que não produz nada de supérfluo ou inútil."
    },
    {
        "author": "Ésquilo",
        "phrase": "A verdadeira sabedoria está em não parecermos sábios."
    },
    {
        "author": "William Blake",
        "phrase": "O caminho do desmedido conduz ao palácio da sabedoria."
    },
    {
        "author": "Francis Bacon",
        "phrase": "Em geral, na natureza humana existe mais tolice do que sabedoria."
    },
    {
        "author": "Jacques Bossuet",
        "phrase": "A sabedoria humana aprende muito se aprender a calar-se."
    },
    {
        "author": "Textos Judaicos",
        "phrase": "Onde há estudo - há sabedoria."
    },
    {
        "author": "Friedrich Schiller",
        "phrase": "É preciso já ser sábio para amar a sabedoria."
    },
    {
        "author": "Edmund Burke",
        "phrase": "O único critério infalível de sabedoria para as mentes banais - sucesso."
    },
    {
        "author": "Erasmo de Roterdã",
        "phrase": "Quanto maior é a sua sabedoria mais os homens se afastam da felicidade."
    },
    {
        "author": "Textos Judaicos",
        "phrase": "Quando as pessoas sábias se zangam, perdem toda a sabedoria."
    },
    {
        "author": "Georges Bernanos",
        "phrase": "Saber encontrar a alegria na alegria dos outros, é o segredo da felicidade."
    },
    {
        "author": "Confúcio",
        "phrase": "Saber o que é correto e não o fazer é falta de coragem."
    },
    {
        "author": "Confúcio",
        "phrase": "Se não sabes, aprende; se já sabes, ensina."
    },
    {
        "author": "Millôr Fernandes",
        "phrase": "Quando todo mundo quer saber é porque ninguém tem nada com isso."
    },
    {
        "author": "Marcel Jouhandeau",
        "phrase": "Saber amar não é amar. Amar não é saber."
    },
    {
        "author": "Aristóteles",
        "phrase": "Todos os homens, por natureza, desejam saber."
    },
    {
        "author": "Poder Além da Vida",
        "phrase": "\"O hábito é um problema. Só precisa estar consciente de suas escolhas e ser responsável por seus atos.\""
    },
    {
        "author": "Poder Além da Vida",
        "phrase": "Pare de reunir informação no seu exterior e comece a reunir informação no seu interior"
    },
    {
        "author": "Poder Além da Vida",
        "phrase": "\"as vezes precisamos enlouquecer para recuperar a sanidade\""
    },
    {
        "author": "Poder Além da Vida",
        "phrase": "\"Where are you? Here\nWhat time is it? Now\nWho are you? this moment\""
    },
    {
        "author": "Poder Além da Vida",
        "phrase": "As pessoas não são o que elas pensam, acham que são e depois ficam desapontadas."
    },
    {
        "author": "Poder Além da Vida",
        "phrase": "\"As pessoas não são o que elas pensam.\""
    },
    {
        "author": "Poder Além da Vida",
        "phrase": "A mente só serve pra dar reflexo, reage a tudo, enche sua cabeça com milhões de pensamentos todos os dias, nenhum deles revela mais sobre você do que uma pinta no seu nariz."
    },
    {
        "author": "Vida",
        "phrase": "Use o medo como motor, e não como freio."
    },
    {
        "author": "Mario Quintana",
        "phrase": "Lavoisier\n\n\"Nada se perde, tudo muda de dono\" - tardia reflexão de Lavoisier ao descobrir que lhe haviam roubado a carteira."
    },
    {
        "author": "Zygmunt Bauman",
        "phrase": "A preocupação com a administração da vida parece distanciar o ser humano da reflexão moral."
    },
    {
        "author": "Axel Oxenstiern",
        "phrase": "O ciumento passa a vida a procurar um segredo cuja descoberta lhe destruiria a felicidade."
    },
    {
        "author": "Victor Hugo",
        "phrase": "A suprema felicidade da vida é ter a convicção de que somos amados."
    },
    {
        "author": "Oscar Wilde",
        "phrase": "A consciência de amar e ser amado traz um conforto e riqueza à vida que nada mais consegue trazer."
    },
    {
        "author": "Provérbio popular",
        "phrase": "Os ignorantes, que acham que sabem tudo, privam-se de um dos maiores prazeres da vida: aprender."
    },
    {
        "author": "Carl Sagan",
        "phrase": "Se não existe vida fora da Terra, então o universo é um grande desperdício de espaço."
    },
    {
        "author": "Fernando Pessoa",
        "phrase": "Ver e ouvir são as únicas coisas nobres que a vida contém. Os outros sentidos são plebeus e carnais. A única aristocracia é nunca tocar."
    },
    {
        "author": "Dalai Lama",
        "phrase": "O período de maior ganho em conhecimento e experiência é o período mais difícil da vida de alguém."
    },
    {
        "author": "Sêneca",
        "phrase": "A educação exige os maiores cuidados, porque influi sobre toda a vida."
    },
    {
        "author": "Winston Churchill",
        "phrase": "A vida dá lições que só se dão uma vez."
    },
    {
        "author": "Florbela Espanca",
        "phrase": "Quem disser que pode amar alguém durante a vida inteira é porque mente."
    },
    {
        "author": "John Dewey",
        "phrase": "A educação é um processo social, é desenvolvimento. Não é a preparação para a vida, é a própria vida."
    },
    {
        "author": "Samuel Butler",
        "phrase": "A vida é a arte de tirar conclusões suficientes a partir de premissas insuficientes."
    },
    {
        "author": "Bertrand Russell",
        "phrase": "A vida é demasiado curta para nos permitir interessar-nos por todas as coisas, mas é bom que nos interessemos por tantas quantas forem necessárias para preencher os nossos dias."
    },
    {
        "author": "Leon Tolstói",
        "phrase": "Na vida só há um modo de ser feliz. Viver para os outros."
    },
    {
        "author": "Millôr Fernandes",
        "phrase": "Nunca esqueça:\nA vida também perde a cabeça"
    },
    {
        "author": "Sêneca",
        "phrase": "Se um grande homem cair, mesmo depois da queda, ele continua grande."
    },
    {
        "author": "Benjamin Disraeli",
        "phrase": "A vida é muito curta para ser pequena."
    },
    {
        "author": "François La Rochefoucauld",
        "phrase": "O primeiro dos bens, depois da saúde, é a paz interior."
    },
    {
        "author": "Fernando Pessoa",
        "phrase": "Viver não é necessário. Necessário é criar."
    },
    {
        "author": "Marcel Proust",
        "phrase": "Em certa idade, quer pela astúcia, quer por amor-próprio, as coisas que mais desejamos são as que fingimos não desejar."
    },
    {
        "author": "Marilyn Ferguson",
        "phrase": "Que haja transformação, e que comece comigo."
    },
    {
        "author": "Michel de Montaigne",
        "phrase": "Abandonar a vida por um sonho é estimá-la exatamente por quanto ela vale."
    },
    {
        "author": "Mahatma Gandhi",
        "phrase": "Uma vida sem religião é como um barco sem leme."
    },
    {
        "author": "Florbela Espanca",
        "phrase": "Se penetrássemos o sentido da vida seríamos menos miseráveis."
    },
    {
        "author": "Antoine de Saint-Exupéry",
        "phrase": "A ordem não cria a vida."
    },
    {
        "author": "Júlio Camargo",
        "phrase": "A vida é uma viagem a três estações: ação, experiência e recordação."
    },
    {
        "author": "Khalil Gibran",
        "phrase": "Numa só semente de trigo há mais vida do que num montão de feno."
    },
    {
        "author": "Antoine de Saint-Exupéry",
        "phrase": "Se a vida não tem preço, nós comportamo-nos sempre como se alguma coisa ultrapassasse, em valor, a vida humana... Mas o quê?"
    },
    {
        "author": "Sêneca",
        "phrase": "Na vida pública, ninguém olha para os que estão pior, mas apenas para os que estão melhor."
    },
    {
        "author": "Jules Renard",
        "phrase": "Amizade, casamento de dois seres que não podem dormir juntos."
    },
    {
        "author": "Desconhecido",
        "phrase": "Se você obedece todas as regras, acaba perdendo a diversão."
    },
    {
        "author": "Bob Marley",
        "phrase": "Todos caem mas apenas os fracos continuam no chão..."
    },
    {
        "author": "Bob Marley",
        "phrase": "Deus me enviou à terra com uma missão. Só Ele pode me deter, os homens nunca poderão."
    },
    {
        "author": "Augusto Cury",
        "phrase": "Construí amigos, enfrentei derrotas, venci obstáculos, bati na porta da vida e disse-lhe: Não tenho medo de vivê-la."
    },
    {
        "author": "Bob Marley",
        "phrase": "Ideal seria que todas as pessoas soubessem amar o tanto que sabem fingir."
    },
    {
        "author": "Bob Marley",
        "phrase": "Eu olho para dentro de mim, e não me importo com o que as pessoas fazem ou dizem. Eu me preocupo só com as coisas certas."
    },
    {
        "author": "Mario Quintana",
        "phrase": "Não faças da tua vida um rascunho.\nPoderás não ter tempo de passá-la a limpo."
    },
    {
        "author": "Fernando Sabino",
        "phrase": "No fim tudo dá certo, e se não deu certo é porque ainda não chegou ao fim."
    },
    {
        "author": "Chico Xavier",
        "phrase": "Deus nos concede, a cada dia, uma página de vida nova no livro do tempo. Aquilo que colocarmos nela, corre por nossa conta."
    },
    {
        "author": "Sébastien-Roch Chamfort",
        "phrase": "Um dia sem rir é um dia desperdiçado."
    },
    {
        "author": "Paulo Coelho",
        "phrase": "Não devemos julgar a vida dos outros, porque cada um de nós sabe de sua própria dor e renúncia. Uma coisa é você ACHAR que está no caminho certo, outra é ACHAR que seu caminho é o único!"
    },
    {
        "author": "Mario Quintana",
        "phrase": "Uma vida não basta ser vivida. Ela precisa ser sonhada."
    },
    {
        "author": "reflexao",
        "phrase": "\"Vital é a Vitalidade Vitalícia dessa Vida...\""
    },
    {
        "author": "reflexao",
        "phrase": "Amar é passar por cima do orgulho"
    },
    {
        "author": "Caio Fernando Abreu",
        "phrase": "Como se ela tivesse sido a mais bela história de amor da sua vida. E que uma parte de você acredite que ela foi, de fato, a mais bela história de amor da sua vida."
    },
    {
        "author": "Álvaro de Campos",
        "phrase": "Mas eu, em cuja alma se refletem\nAs forças todas do universo,\nEm cuja reflexão emotiva e sacudida\nMinuto a minuto, emoção a emoção,\nCoisas antagônicas e absurdas se sucedem ..."
    },
    {
        "author": "Clarice Lispector",
        "phrase": "\"Dela havia aos poucos emergido para descobrir que também sem a felicidade se vivia\""
    },
    {
        "author": "Caio Fernando Abreu",
        "phrase": "Em cada noite descobrir um motivo razoável para acordar amanhã."
    },
    {
        "author": "Augusto Branco",
        "phrase": "Conheci um homem que não acreditava em magia\naté descobrir ele próprio era um mago."
    },
    {
        "author": "Clarice Lispector",
        "phrase": "Há alguma coisa aqui que me dá medo. Quando eu descobrir o que me assusta, saberei também o que amo aqui"
    },
    {
        "author": "Charles Chaplin",
        "phrase": "Num filme o que importa não é a realidade, mas o que dela possa extrair a imaginação."
    },
    {
        "author": "Albert Einstein",
        "phrase": "Os ideais que iluminaram o meu caminho são a bondade, a beleza e a verdade."
    },
    {
        "author": "Charles Chaplin",
        "phrase": "A beleza é a única coisa preciosa na vida. É difícil encontrá-la, mas quem consegue descobre tudo."
    },
    {
        "author": "William Shakespeare",
        "phrase": "É um péssimo cozinheiro aquele que não pode lamber os próprios dedos."
    },
    {
        "author": "Desconhecido",
        "phrase": "Bendito quem inventou o belo truque do calendário, pois o bom da segunda-feira, do dia 1.º do mês e de cada ano novo é que nos dão a impressão de que a vida não continua, mas apenas recomeça..."
    },
    {
        "author": "Mario Quintana",
        "phrase": "E um dia os homens descobrirão que esses discos voadores estavam apenas estudando a vida dos insetos..."
    },
    {
        "author": "William Shakespeare",
        "phrase": "O casamento faz de duas pessoas uma só, difícil é determinar qual será."
    },
    {
        "author": "Sigmund Freud",
        "phrase": "Um homem que está livre da religião tem uma oportunidade melhor de viver uma vida mais normal e completa."
    },
    {
        "author": "Fernando Pessoa",
        "phrase": "Quero para mim o espírito desta frase, transformada a forma para a casar com o que eu sou: Viver não é necessário; o que é necessário é criar."
    },
    {
        "author": "Mario Quintana",
        "phrase": "Sonhar é acordar-se para dentro."
    },
    {
        "author": "Friedrich Nietzsche",
        "phrase": "É difícil viver com as pessoas porque calar é muito difícil."
    },
    {
        "author": "Mahatma Gandhi",
        "phrase": "Aprendi através da experiência amarga a suprema lição: controlar minha ira e torná-la como o calor que é convertido em energia. Nossa ira controlada pode ser convertida numa força capaz de mover o mundo."
    },
    {
        "author": "Mario Quintana",
        "phrase": "Amor\nQuando duas pessoas fazem amor\nNão estão apenas fazendo amor\nEstão dando corda ao relógio do mundo"
    },
    {
        "author": "Miguel Unamuno",
        "phrase": "Cada novo amigo que ganhamos no decorrer da vida aperfeiçoa-nos e enriquece-nos, não tanto pelo que nos dá, mas pelo que nos revela de nós mesmos."
    },
    {
        "author": "Sócrates",
        "phrase": "Meu conselho é que se case. Se você arrumar uma boa esposa, será feliz; se arrumar uma esposa ruim, se tornará um filósofo."
    },
    {
        "author": "Yoko Ono",
        "phrase": "Um sonho sonhado sozinho é um sonho. Um sonho sonhado junto é realidade."
    },
    {
        "author": "Albert Einstein",
        "phrase": "A liberação da energia atômica mudou tudo, menos nossa maneira de pensar."
    },
    {
        "author": "Mario Quintana",
        "phrase": "DOS MILAGRES\n\nO milagre não é dar vida ao corpo extinto,\nOu luz ao cego, ou eloquência ao mudo...\nNem mudar água pura em vinho tinto...\nMilagre é acreditarem nisso tudo!"
    },
    {
        "author": "H. Jackson Brown Jr",
        "phrase": "Daqui a vinte anos você estará mais arrependido pelas coisas que não fez do que pelas que fez. Então solte suas amarras. Afaste-se do porto seguro. Agarre o vento em suas velas. Explore. Sonhe. Descubra."
    },
    {
        "author": "Carlos Drummond de Andrade",
        "phrase": "Há duas épocas na vida, infância e velhice, em que a felicidade está numa caixa de bombons."
    },
    {
        "author": "Fabrício Carpinejar",
        "phrase": "É só acreditar que o amor é eterno que ele termina. É só acreditar que o amor terminou que ele recomeça."
    },
    {
        "author": "Carl Jung",
        "phrase": "Não preciso ‘acreditar’ em Deus; eu sei que ele existe."
    },
    {
        "author": "Rob Siltanen",
        "phrase": "Porque as pessoas loucas o bastante para acreditar que podem mudar o mundo, são as que o mudam."
    },
    {
        "author": "Renato Russo",
        "phrase": "Quem me dera, ao menos uma vez, acreditar por um instante em tudo o que existe. Acreditar que o mundo é perfeito e que todas as pessoas são felizes."
    },
    {
        "author": "Desconhecido",
        "phrase": "Você me faz acreditar que nada existe sem amor, que você veio pra mostrar o meu caminho. Você me traz uma paixão que eu nunca pude descobrir. Mostrou que um coração não vive sem carinho."
    },
    {
        "author": "Fabrício Carpinejar",
        "phrase": "Não deixo de acreditar nas coisas porque não existem. Eu também posso me inventar para elas."
    },
    {
        "author": "Galileu Galilei",
        "phrase": "Não consigo acreditar que o mesmo Deus que nos deu inteligência, razão e bom senso nos proíba de usá-los."
    },
    {
        "author": "Simone de Beauvoir",
        "phrase": "Entretanto, não se deve acreditar que todas as dificulades se atenuem nas mulheres de temperamento ardente.\nAo contrário, podem exasperar-se. A pertubação feminina pode atingir uma intensidade que o homem não conhece."
    },
    {
        "author": "Tumblr",
        "phrase": "Não basta sonhar, você tem que lutar e acreditar."
    },
    {
        "author": "Desconhecido",
        "phrase": "Acreditar é essencial, mas ter atitude é o que faz a diferença."
    },
    {
        "author": "Elvis Presley",
        "phrase": "Acreditar em Deus é mas importante que ir a igreja."
    },
    {
        "author": "Nando Reis",
        "phrase": "Mas talvez, você não entenda, essa coisa de fazer o mundo acreditar, que não será passageiro, te amarei de janeiro a janeiro, até o mundo acabar."
    },
    {
        "author": "Audrey Hepburn",
        "phrase": "O segredo da minha lucidez é não acreditar em juventude eterna."
    },
    {
        "author": "Simone de Beauvoir",
        "phrase": "Encanto é o que alguns têm até que começam a acreditar que, de fato, o têm."
    },
    {
        "author": "Albert Einstein",
        "phrase": "Concentre-se em aprender e não em acreditar..."
    },
    {
        "author": "Caio Fernando Abreu",
        "phrase": "Só uma coisa era fundamental e dificílima: acreditar!"
    },
    {
        "author": "Clarice Lispector",
        "phrase": "Eu prefiro olhar para trás e dizer: ”Eu não posso acreditar que fiz isso.” Do que dizer ”Eu gostaria de ter feito isso."
    },
    {
        "author": "Thomas Hardy",
        "phrase": "Embora muita coisa seja estranha demais para se acreditar, nada é estranho demais que não possa ter acontecido."
    },
    {
        "author": "Caio Fernando Abreu",
        "phrase": "Dentro dela tem um coração bobo, que é sempre capaz de amar e de acreditar outra vez. Uma solidão de artista e um ar sensato de cientista… tem aquele gosto doce de menina romântica e aquele gosto ácido de mulher moderna"
    },
    {
        "author": "Arthur Schopenhauer",
        "phrase": "Melhor deixar que os homens sejam como são do que acreditar no que não são."
    },
    {
        "author": "Mahatma Gandhi",
        "phrase": "O fraco jamais perdoa: o perdão é uma das características do forte."
    },
    {
        "author": "Albert Einstein",
        "phrase": "A leitura após certa idade distrai excessivamente o espírito humano das suas reflexões criadoras. Todo o homem que lê demais e usa o cérebro de menos adquire a preguiça de pensar."
    },
    {
        "author": "Confúcio",
        "phrase": "Pensar sem aprender torna-nos caprichosos, e aprender sem pensar é um desastre."
    },
    {
        "author": "Caio Fernando Abreu",
        "phrase": "Acredite no amor. Se você o ama, você espera. O amor é paciente."
    },
    {
        "author": "Tumblr",
        "phrase": "Não sou de ficar chorando por aí, pra todo mundo ver. Quando eu choro na frente de alguém, acredite, é porque cheguei ao meu limite."
    },
    {
        "author": "Paulo Coelho",
        "phrase": "Não acredite que está mal: deixe que a Mãe possua seu corpo e sua alma, entregue-se através da dança ou do silêncio, ou das coisas comuns da vida."
    },
    {
        "author": "JeZieL L. CarVAlhO",
        "phrase": "Não acredite em tudo que te dizem... tente descobrir por si mesmo a verdade..."
    },
    {
        "author": "Mariluci Carvalho de Souza",
        "phrase": "Tudo na vida acontece em função do melhor! Acredite, a sua amargura de hoje é, com certeza, a sementinha da sua alegria de amanhã!"
    },
    {
        "author": "Gherheai",
        "phrase": "O pessimismo enfraquece a alma, mas o otimismo fortalece a vida."
    },
    {
        "author": "Matheus Arruda Pinheiro",
        "phrase": "Se você tem o poder de mentir, acredite, eu tenho a magia de fingir acreditar!"
    },
    {
        "author": "Walt Disney",
        "phrase": "Quando você acreditar em uma coisa, acredite até ao fim, de forma implícita e inquestionável."
    },
    {
        "author": "Crislaine Fernanda",
        "phrase": "Acredite em si mesmo, antes de acreditar nos outros..."
    },
    {
        "author": "Renato Russo",
        "phrase": "Se você realmente quer ir pra frente, você tem que saber o que está fazendo e acreditar. Não adianta ficar achando que as pessoas vão resolver os seus problemas, porque a única pessoa que pode resolver as suas coisas é você mesmo."
    },
    {
        "author": "Anatole France",
        "phrase": "Para conseguir grandes coisas, é necessário não apenas planejar, mas também acreditar; não apenas agir, mas também sonhar."
    },
    {
        "author": "Augusto Branco",
        "phrase": "A realização de todo feito extraordinário\nconsiste em ter um sonho\ne acreditar nele."
    },
    {
        "author": "Augusto Branco",
        "phrase": "Todos nós somos grandes! Mas às vezes, apenas, deixamos de acreditar nisto."
    },
    {
        "author": "Renato Russo",
        "phrase": "É preciso acreditar num novo dia!"
    },
    {
        "author": "Charles Bukowski",
        "phrase": "Tudo é inverossímil enquanto não acontece pela primeira vez. Quem há de acreditar em coisas que ainda estão por vir?"
    },
    {
        "author": "Augusto Branco",
        "phrase": "Alguém precisou acreditar que era possível alcançar as estrelas\npara que o homem parasse de andar em carroças e chegasse ao espaço."
    },
    {
        "author": "Anthony Robbins",
        "phrase": "Embora preferíssemos acreditar que é o intelecto que nos guia, são nossas emoções - as sensações que vinculamos aos pensamentos - que realmente nos guiam."
    },
    {
        "author": "Victor Hugo",
        "phrase": "Seja como os pássaros que, ao pousarem um instante sobre ramos muito leves, sentem-nos ceder, mas cantam! Eles sabem que possuem asas."
    },
    {
        "author": "Friedrich Nietzsche",
        "phrase": "Para a maioria, quão pequena é a porção de prazer que basta para fazer a vida agradável!"
    },
    {
        "author": "Immanuel Kant",
        "phrase": "O homem não é nada além daquilo que a educação faz dele."
    },
    {
        "author": "William Shakespeare",
        "phrase": "O pensamento é escravo da vida, e a vida é o bobo do tempo."
    },
    {
        "author": "René Descartes",
        "phrase": "Viver sem filosofar é o que se chama ter os olhos fechados sem nunca os haver tentado abrir."
    },
    {
        "author": "Júlio Dinis",
        "phrase": "Um amor bem verdadeiro, uma vida bem íntima com uma mulher, a quem se queira como amante, que se estime como irmã, que se venere com mãe, que se proteja como filha, é evidentemente o destino mais natural ao homem, o complemento da sua missão na terra."
    },
    {
        "author": "William Shakespeare",
        "phrase": "Considero o mundo por aquilo que ele é, Graciano: / Um palco em que cada um deve recitar um papel, / e o meu é um papel triste."
    },
    {
        "author": "Benjamin Franklin",
        "phrase": "As três coisas mais difíceis do mundo são: guardar um segredo, perdoar uma ofensa e aproveitar o tempo."
    },
    {
        "author": "Charles Chaplin",
        "phrase": "Conhecer o homem - esta é a base de todo o sucesso."
    },
    {
        "author": "Desconhecido",
        "phrase": "Quando, na vida, uma porta se fecha para nós, há sempre outra que nos abre. Em geral, porém, olhamos com tanto pesar e ressentimento para a porta fechada, que não nos apercebemos da outra que se abriu."
    },
    {
        "author": "Oscar Wilde",
        "phrase": "O amor deveria perdoar todos os pecados, menos um pecado contra o amor. O amor verdadeiro deveria ter perdão para todas as vidas, menos para as vidas sem amor."
    },
    {
        "author": "Gabriel García Márquez",
        "phrase": "Um único minuto de reconciliação vale mais do que toda uma vida de amizade."
    },
    {
        "author": "Mark Twain",
        "phrase": "A gente não se liberta de um hábito atirando-o pela janela: é preciso fazê-lo descer a escada, degrau por degrau."
    },
    {
        "author": "Aristóteles",
        "phrase": "A amizade perfeita apenas pode existir entre os bons."
    },
    {
        "author": "William Shakespeare",
        "phrase": "Guarda teu amigo sob a chave de tua própria vida."
    },
    {
        "author": "Confúcio",
        "phrase": "O mestre disse: Quem se modera, raramente se perde."
    },
    {
        "author": "Machado de Assis",
        "phrase": "A vida é cheia de obrigações que a gente cumpre por mais vontade que tenha de as infringir deslavadamente."
    },
    {
        "author": "Mario Quintana",
        "phrase": "A verdadeira arte de viajar...\nA gente sempre deve sair à rua como quem foge de casa,\nComo se estivessem abertos diante de nós todos os caminhos do mundo.\nNão importa que os compromissos, as obrigações, estejam ali...\nChegamos de muito longe, de alma aberta e o coração cantando!"
    },
    {
        "author": "Lord Byron",
        "phrase": "Na vida do homem, o amor é uma parte, na da mulher, é toda a vida."
    },
    {
        "author": "Millôr Fernandes",
        "phrase": "Esta é a verdade: a vida começa quando a gente compreende que ela não dura muito."
    },
    {
        "author": "Sigmund Freud",
        "phrase": "A ciência não é uma ilusão, mas seria uma ilusão acreditar que poderemos encontrar noutro lugar o que ela não nos pode dar."
    },
    {
        "author": "Millôr Fernandes",
        "phrase": "Acreditar que não acreditamos em nada é crer na crença do descrer."
    },
    {
        "author": "Oscar Wilde",
        "phrase": "O homem pode acreditar no impossível, mas nunca pode acreditar no improvável."
    },
    {
        "author": "Sêneca",
        "phrase": "Não se pode acreditar que é possível ser feliz procurando a infelicidade alheia."
    },
    {
        "author": "Friedrich Nietzsche",
        "phrase": "Levar insidiosamente o próximo a uma boa opinião de nós e, depois, acreditar piamente nessa boa opinião: quem consegue imitar nesta habilidade as mulheres?"
    },
    {
        "author": "Jan Neruda",
        "phrase": "Quem não sabe nada tem de acreditar em tudo."
    },
    {
        "author": "Benjamin Franklin",
        "phrase": "Aquele que acreditar que o dinheiro fará tudo pode bem ser suspeito de fazer tudo por dinheiro."
    },
    {
        "author": "Edmund Burke",
        "phrase": "É um erro popular muito comum acreditar que aqueles que fazem mais barulho a lamentarem-se a favor do público sejam os mais preocupados com o seu bem-estar.."
    },
    {
        "author": "Denis Diderot",
        "phrase": "É tão arriscado acreditar em tudo como não acreditar em nada."
    },
    {
        "author": "Michel de Montaigne",
        "phrase": "Os homens tendem a acreditar sobretudo naquilo que menos compreendem."
    },
    {
        "author": "Erich Remarque",
        "phrase": "No desespero e no perigo, as pessoas aprendem a acreditar no milagre. De outra forma não sobreviveriam."
    },
    {
        "author": "Robert Collier",
        "phrase": "Passa-se a acreditar naquilo que se repete frequentemente para si mesmo, quer seja verdade ou mentira. Isso passa a ser um pensamento dominante na mente."
    },
    {
        "author": "Blaise Pascal",
        "phrase": "É uma doença natural no homem acreditar que possui a verdade."
    },
    {
        "author": "Edmond Rostand",
        "phrase": "É à noite que é belo acreditar na Luz."
    },
    {
        "author": "Eurípedes Barsanulfo",
        "phrase": "Aqui mora a fé, a sublime qualidade dos que jamais deixarão de acreditar na força superior do bem."
    },
    {
        "author": "Umberto Eco",
        "phrase": "Eu comecei a acreditar que o mundo inteiro é um enigma, um enigma inofensivo que se torna terrível pela nossa própria tentativa furiosa em interpretá-lo como se ele tivesse uma verdade secreta."
    },
    {
        "author": "Étienne Jodelle",
        "phrase": "Quanto mais se discute Deus, menos somos levados a acreditar nele."
    },
    {
        "author": "Graham Greene",
        "phrase": "Acreditar que um ser não sofre quando os olhos nada exprimem é erro fácil de cometer."
    },
    {
        "author": "Johann Goethe",
        "phrase": "O ritmo tem algo mágico; chega a fazer-nos acreditar que o sublime nos pertence."
    },
    {
        "author": "André Gide",
        "phrase": "O apetite de saber nasce da dúvida. Deixa de acreditar e instrui-te!"
    },
    {
        "author": "Roberto Shinyashiki",
        "phrase": "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado."
    },
    {
        "author": "Paulo Coelho",
        "phrase": "Imagine uma nova história para sua vida e acredite nela."
    },
    {
        "author": "Platão",
        "phrase": "Não espere por uma crise para descobrir o que é importante em sua vida."
    },
    {
        "author": "Carlos Drummond de Andrade",
        "phrase": "Perder tempo em aprender coisas que não interessam, priva-nos de descobrir coisas interessantes."
    },
    {
        "author": "William James",
        "phrase": "Pessimismo leva à fraqueza, otimismo ao poder."
    },
    {
        "author": "Helen Keller",
        "phrase": "O otimismo é a fé em ação. Nada se pode levar a efeito sem otimismo."
    },
    {
        "author": "Arnold Bennett",
        "phrase": "O pessimismo, depois de você se acostumar a ele, é tão agradável quanto o otimismo."
    },
    {
        "author": "Miguel Unamuno",
        "phrase": "Não são as nossas ideias que nos fazem otimistas ou pessimistas, mas o otimismo e o pessimismo de origem fisiológica que fazem as nossas ideias."
    },
    {
        "author": "Vergílio Ferreira",
        "phrase": "O contrário do pessimismo raramente é o otimismo. O contrário do pessimismo, se não é a boa intenção de injetar força nos fracos, o que é bonito e faz bem, é quase sempre a idiota."
    },
    {
        "author": "John Ruskin",
        "phrase": "Somente quando encontramos o amor, é que descobrimos o que nos faltava na vida."
    },
    {
        "author": "Max Planck",
        "phrase": "Para os crentes, Deus está no princípio das coisas. Para os cientistas, no final de toda reflexão."
    },
    {
        "author": "Albert Camus",
        "phrase": "Antes, a questão era descobrir se a vida precisava de ter algum significado para ser vivida. Agora, ao contrário, ficou evidente que ela será vivida melhor se não tiver significado."
    },
    {
        "author": "Boris Pasternak",
        "phrase": "Temos de descobrir segurança dentro de nós próprios. Durante o curto espaço de tempo da nossa vida precisamos encontrar o nosso próprio critério de relações com a existência em que participamos tão transitoriamente."
    },
    {
        "author": "Daniel Godri",
        "phrase": "Se a sua vida for a melhor coisa que já te aconteceu, acredite, você tem mais sorte do que pode imaginar."
    },
    {
        "author": "Roberto Simonsen",
        "phrase": "Otimismo é esperar pelo melhor. Confiança é saber lidar com o pior."
    },
    {
        "author": "Lucille Ball",
        "phrase": "Evite desencorajar-se: mantenha ocupações e faça do otimismo a maneira de viver. Isso restaura a fé em si."
    },
    {
        "author": "Confúcio",
        "phrase": "O pessimismo torna os homens cautelosos, enquanto, o otimismo torna os homens imprudentes."
    },
    {
        "author": "Voltaire",
        "phrase": "Otimismo é a mania de sustentar que tudo está bem quando tudo está mal."
    },
    {
        "author": "Roger Von Oech",
        "phrase": "Descobrir consiste em olhar para o que todo mundo está vendo e pensar uma coisa diferente."
    },
    {
        "author": "Sócrates",
        "phrase": "A sabedoria começa na reflexão."
    },
    {
        "author": "Renato Russo",
        "phrase": "Nunca deixe que lhe digam que não vale a pena\nacreditar no sonho que se tem\nou que os seus planos nunca vão dar certo\nou que você nunca vai ser alguém..."
    },
    {
        "author": "Albert Einstein",
        "phrase": "Há duas formas para viver a sua vida. Uma é acreditar que não existe milagre. A outra é acreditar que todas as coisas são um milagre."
    },
    {
        "author": "Clarice Lispector",
        "phrase": "Ela acreditava em anjo e, porque acreditava, eles existiam."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Amar talvez seja isso...\nDescobrir o que o outro fala mesmo quando ele não diz."
    },
    {
        "author": "Nelson Mandela",
        "phrase": "Não há nada como regressar a um lugar que está igual para descobrir o quanto a gente mudou."
    },
    {
        "author": "Ana Carolina",
        "phrase": "Juro que se eu pudesse voltaria no tempo só pra descobrir, de novo, como é gostar de você"
    },
    {
        "author": "Arnaldo Jabor",
        "phrase": "Você vai descobrir mais cedo ou mais tarde que o tempo pra ser feliz é curto, e cada instante que vai embora não volta mais."
    },
    {
        "author": "Paulo Coelho",
        "phrase": "A linguagem de seu coração é que irá determinar a maneira correta de descobrir e manejar a sua espada."
    },
    {
        "author": "Martha Medeiros",
        "phrase": "Amadurecer talvez seja descobrir que sofrer algumas perdas é inevitável, mas que não precisamos nos agarrar à dor para justificar nossa existência."
    },
    {
        "author": "Richard Bach",
        "phrase": "Aprender é descobrir aquilo que voce já sabe. Ensinar é lembrar aos outros que eles sabem tanto quanto você."
    },
    {
        "author": "Jean Piaget",
        "phrase": "O professor não ensina, mas arranja modos de a própria criança descobrir. Cria situações-problemas."
    },
    {
        "author": "Tati Bernardi",
        "phrase": "Taí. Tá bom. O amor venceu. Você venceu. Venceu. Venceu. Venceu. E eu acabo de descobrir, simples assim, a única maneira de me livrar desse sentimento: aceitando ele, parando de querer ganhar dele. Te amo mesmo, talvez pra sempre."
    },
    {
        "author": "Caio Fernando Abreu",
        "phrase": "De cada dia arrancar das coisas uma modesta alegria; em cada noite descobrir um motivo razoável para acordar amanhã."
    },
    {
        "author": "Isaac Newton",
        "phrase": "Tenho a impressão de ter sido uma criança brincando à beira-mar, divertindo-me em descobrir uma pedrinha mais lisa ou uma concha mais bonita que as outras, enquanto o imenso oceano da verdade continua misterioso diante de meus olhos."
    },
    {
        "author": "Renato Russo",
        "phrase": "Um dia pretendo\nTentar descobrir\nPorque é mais forte\nQuem sabe mentir\nNão quero lembrar\nQue eu minto também."
    },
    {
        "author": "Fernando Anitelli",
        "phrase": "Descobrir o verdadeiro sentido das coisas é querer saber demais!"
    },
    {
        "author": "Martha Medeiros",
        "phrase": "Estão perdendo a viagem aqueles que não sabem de onde vieram nem tentam descobrir. Que não sabem para onde ir e nem tentam encontrar um caminho. Aqueles para quem a televisão pode tranqüilamente substituir as emoções.\n\n(Perder a Viagem)"
    },
    {
        "author": "Paulo Coelho",
        "phrase": "A linguagem de seu coração é que irá determinar a maneira correta de descobrir e manejar a sua existência."
    },
    {
        "author": "Eça de Queirós",
        "phrase": "Curiosidade: instinto que leva alguns a olhar pelo buraco da fechadura, e outros a descobrir a América."
    },
    {
        "author": "Groucho Marx",
        "phrase": "- Vamos descobrir um tesouro naquela casa?\n- Mas não há nenhuma casa...\n- Então vamos construí-la !"
    },
    {
        "author": "Fidel Castro",
        "phrase": "Um revolucionário pode perder tudo: a família, a liberdade, até a vida. Menos a moral."
    },
    {
        "author": "Henry Beecher",
        "phrase": "As horas mais tristes da vida são aquelas em que duvidamos de nós próprios."
    },
    {
        "author": "Friedrich Nietzsche",
        "phrase": "Toda a arte e toda a filosofia podem ser consideradas como remédios da vida, ajudantes do seu crescimento ou bálsamo dos combates: postulam sempre sofrimento e sofredores."
    },
    {
        "author": "Joseph Campbell",
        "phrase": "Precisamos estar dispostos a nos livrar da vida que planejamos, para podermos viver a vida que nos espera. A pele velha tem que cair para que uma nova possa nascer."
    },
    {
        "author": "Darcy Ribeiro",
        "phrase": "Só há duas opções nesta vida: se resignar ou se indignar. E eu não vou me resignar nunca."
    },
    {
        "author": "Arthur Schopenhauer",
        "phrase": "Certamente a vida não existe para ser aproveitada, mas para ser suportada e despachada... De fato, é um conforto na velhice ter o trabalho da vida por trás de si."
    },
    {
        "author": "Italo Svevo",
        "phrase": "Uma das grandes dificuldades da vida é adivinhar qual é o desejo de uma mulher."
    },
    {
        "author": "Textos Judaicos",
        "phrase": "A maior caridade é habilitar o pobre a ganhar a sua vida."
    },
    {
        "author": "Rosa Luxemburgo",
        "phrase": "No meio das trevas, sorrio à vida, como se conhecesse a fórmula mágica que transforma o mal e a tristeza em claridade e em felicidade. Então, procuro uma razão para esta alegria, não a acho e não posso deixar de rir de mim mesma. Creio que a própria vida é o único segredo."
    },
    {
        "author": "Marco Aurélio",
        "phrase": "Pratica cada um dos teus atos como se fosse o último da tua vida."
    },
    {
        "author": "Thomas Carlyle",
        "phrase": "O homem nasceu para lutar e a sua vida é uma eterna batalha."
    },
    {
        "author": "Dale Carnegie",
        "phrase": "Arrisque-se! Toda vida é um risco. O homem que vai mais longe é geralmente aquele que está disposto a fazer e a ousar. O barco da 'segurança' nunca vai muito além da margem."
    },
    {
        "author": "Marxwell Maltz",
        "phrase": "A vida está cheia de desafios que, se aproveitados de forma criativa, transformam-se em oportunidades."
    },
    {
        "author": "Mark Twain",
        "phrase": "Tudo o que é preciso na vida é ignorância e confiança; depois, o sucesso está garantido."
    },
    {
        "author": "Jean-Paul Sartre",
        "phrase": "Se os comunistas têm razão, então eu sou o louco mais solitário em vida. Se eles estão errados, então não há esperança para o mundo."
    },
    {
        "author": "Sêneca",
        "phrase": "Os desejos da vida formam uma corrente cujos elos são as esperanças."
    },
    {
        "author": "Sófocles",
        "phrase": "Só uma palavra nos liberta de todo o peso e da dor da vida: essa palavra é o Amor."
    },
    {
        "author": "Benjamin Disraeli",
        "phrase": "O segredo do êxito na vida de um homem está em preparar-se para aproveitar a ocasião, quando ela se apresenta."
    },
    {
        "author": "Cesare Pavese",
        "phrase": "Em suma, todo o problema da vida é este: como romper a própria solidão, como comunicar-se com os outros."
    },
    {
        "author": "Camilo Castelo Branco",
        "phrase": "O amor é uma luz que não deixa escurecer a vida."
    },
    {
        "author": "Lord Byron",
        "phrase": "A vida é como o vinho: se a quisermos apreciar bem, não devemos bebê-la até à última gota."
    },
    {
        "author": "Aristóteles",
        "phrase": "O valor fundamental da vida depende da percepção e do poder de contemplação ao invés da mera sobrevivência."
    },
    {
        "author": "François La Rochefoucauld",
        "phrase": "A duração das nossas paixões depende tão pouco de nós como a duração da nossa vida."
    },
    {
        "author": "Helen Keller",
        "phrase": "Evitar o perigo não é, a longo prazo, tão seguro quanto expor-se ao perigo. A vida é uma aventura ousada ou, então, não é nada."
    },
    {
        "author": "Miguel Unamuno",
        "phrase": "É preciso esquecer para viver; a vida é esquecimento; cumpre abrir espaço para o que está por vir."
    },
    {
        "author": "Bertrand Russell",
        "phrase": "Uma vida feliz deve ser em grande parte uma vida tranquila, pois só numa atmosfera calma pode existir o verdadeiro prazer."
    },
    {
        "author": "Oscar Wilde",
        "phrase": "A literatura antecipa sempre a vida. Não a copia, molda-a aos seus desígnios."
    },
    {
        "author": "Marco Aurélio",
        "phrase": "A maior parte das coisas que dizemos e fazemos não é necessária; quem as eliminar da própria vida será mais tranquilo e sereno."
    },
    {
        "author": "Carlos Drummond de Andrade",
        "phrase": "stop\na vida parou\nou foi o automóvel?"
    },
    {
        "author": "Zig Ziglar",
        "phrase": "Aquilo que consome sua mente controla sua vida."
    },
    {
        "author": "John Keats",
        "phrase": "Oh, se eu ao menos pudesse ter uma vida de sensações em vez de uma vida de pensamentos."
    },
    {
        "author": "Alice Ruiz",
        "phrase": "Neve ou não neve\nonde há amigos\na vida é leve"
    },
    {
        "author": "Elbert Hubbard",
        "phrase": "O maior erro na vida é o de ter sempre medo de errar."
    },
    {
        "author": "Jean de La Fontaine",
        "phrase": "A amizade é como a sombra na tarde - cresce até com o ocaso da vida."
    },
    {
        "author": "Barão de Montesquieu",
        "phrase": "O estudo foi para mim o remédio soberano contra os desgostos da vida, não havendo nenhum desgosto de que uma hora de leitura me não tenha consolado."
    },
    {
        "author": "Johann Goethe",
        "phrase": "Só a arte permite a realização de tudo o que na realidade a vida recusa ao homem."
    },
    {
        "author": "Jean de La Fontaine",
        "phrase": "Ao longo da tua vida tem cuidado para não julgares as pessoas pelas aparências."
    },
    {
        "author": "Sébastien-Roch Chamfort",
        "phrase": "O homem chega inexperiente a cada idade da vida."
    },
    {
        "author": "Dag Hammarkskjod",
        "phrase": "O silêncio é o espaço que envolve toda a ação e vida em comum. A amizade não precisa de palavras: é a solidão livre da angústia da solidão."
    },
    {
        "author": "Alfred de Musset",
        "phrase": "A vida é um sono de que o amor é o sonho, e vós tereis vivido se houverdes amado."
    },
    {
        "author": "Honoré de Balzac",
        "phrase": "Na vida de um homem não há dois momentos de prazer parecidos, tal como não há duas folhas na mesma árvore exatamente iguais."
    },
    {
        "author": "Sêneca",
        "phrase": "Enquanto protelamos a vida passa por nós a correr."
    },
    {
        "author": "Carl Jung",
        "phrase": "O sapato que se ajusta a um homem aperta o outro; não há nada para a vida que funcione em todos os casos."
    },
    {
        "author": "Voltaire",
        "phrase": "A vida é uma criança que é preciso embalar até que adormeça."
    },
    {
        "author": "Sébastien-Roch Chamfort",
        "phrase": "Há duas coisas a que temos de nos habituar, sob pena de acharmos a vida insuportável: são as injúrias do tempo e as injustiças dos homens."
    },
    {
        "author": "Pierre-Joseph Proudhon",
        "phrase": "A vida do homem divide-se em cinco períodos: infância, adolescência, mocidade, virilidade e velhice. No primeiro período o homem ama a mulher como mãe; no segundo, como irmã; no terceiro, como amante; no quarto, como esposa; no quinto, como filha."
    },
    {
        "author": "Ludwig Wittgenstein",
        "phrase": "Sentimos que, mesmo depois de serem respondidas todas as questões científicas possíveis, os problemas da vida permanecem completamente intactos."
    },
    {
        "author": "Marquês de Maricá",
        "phrase": "Desperdiçamos o tempo, queixando-nos sempre de que a vida é breve."
    },
    {
        "author": "Marquês de Maricá",
        "phrase": "A preguiça gasta a vida, como a ferrugem consome o ferro."
    },
    {
        "author": "Thomas Huxley",
        "phrase": "A grande finalidade da vida não é o conhecimento, mas a ação."
    },
    {
        "author": "W. Somerset Maugham",
        "phrase": "A arte, um dos grandes valores da vida, deve ensinar aos homens: humildade, tolerância, sabedoria e magnanimidade."
    },
    {
        "author": "Jean Paulhan",
        "phrase": "A vida é em geral alegre. O que nos torna injustos em relação a ela é que a alegria não é recordada. Ao contrário, a inquietude, essa, permanece."
    },
    {
        "author": "Sêneca",
        "phrase": "Não estudamos para a vida, mas para a escola."
    },
    {
        "author": "Victor Hugo",
        "phrase": "Essa divisória que nos separa do mistério das coisas a que chamamos vida."
    },
    {
        "author": "Federico Fellini",
        "phrase": "O cinema é um modo divino de contar a vida."
    },
    {
        "author": "Horace Walpole",
        "phrase": "A vida é uma comédia para os que pensam e uma trágédia para os que sentem."
    },
    {
        "author": "Chorão",
        "phrase": "Tomo cuidado pra que os desequilibrados não abalem minha fé, pra eu enfrentar com otimismo essa loucura."
    },
    {
        "author": "tamires",
        "phrase": "\"O otimismo representa meia batalha vencida.\""
    },
    {
        "author": "tamires",
        "phrase": "A fé e a nossa perseverança despertam o otimismo, que conduz à vitória final."
    },
    {
        "author": "Indira Gandhi",
        "phrase": "Acredito nos jovens que trazem sempre no rosto um fio de otimismo e alegria, como lamparina dentro do coração e o transmitem aos outros."
    },
    {
        "author": "Machado de Assis",
        "phrase": "Não tive filhos, não transmiti a nenhuma criatura o legado de nossa miséria."
    },
    {
        "author": "Johann Goethe",
        "phrase": "Na plenitude da felicidade, cada dia é uma vida inteira."
    },
    {
        "author": "Che Guevara",
        "phrase": "Sonha e serás livre de espírito... luta e serás livre na vida."
    },
    {
        "author": "Millôr Fernandes",
        "phrase": "Viver é desenhar sem borracha."
    },
    {
        "author": "Francis Bacon",
        "phrase": "Não há solidão mais triste do que a do homem sem amizades. A falta de amigos faz com que o mundo pareça um deserto."
    },
    {
        "author": "Oscar Wilde",
        "phrase": "Egoísmo não é viver à nossa maneira, mas desejar que os outros vivam como nós queremos."
    },
    {
        "author": "Oscar Wilde",
        "phrase": "Ser grande significa ser incompreendido."
    },
    {
        "author": "Sócrates",
        "phrase": "Sob a direção de um forte general, não haverá jamais soldados fracos."
    },
    {
        "author": "Martin Luther King",
        "phrase": "A verdadeira medida de um homem não se vê na forma como se comporta em momentos de conforto e conveniência, mas em como se mantém em tempos de controvérsia e desafio."
    },
    {
        "author": "Luís de Camões",
        "phrase": "Os bons vi sempre passar\nNo mundo graves tormentos;\nE para mais me espantar\nOs maus vi sempre nadar\nEm mar de contentamentos."
    },
    {
        "author": "Leonardo da Vinci",
        "phrase": "Pouco conhecimento faz com que as pessoas se sintam orgulhosas. Muito conhecimento, que se sintam humildes. É assim que as espigas sem grãos erguem desdenhosamente a cabeça para o céu, enquanto que as cheias as baixam para a terra, sua mãe."
    },
    {
        "author": "Luis Fernando Veríssimo",
        "phrase": "A verdade é que a gente não faz filhos. Só faz o layout. Eles mesmos fazem a arte-final."
    },
    {
        "author": "Honoré de Balzac",
        "phrase": "É tão absurdo dizer que um homem não pode amar a mesma mulher toda a vida, quanto dizer que um violinista precisa de diversos violinos para tocar a mesma música."
    },
    {
        "author": "William Shakespeare",
        "phrase": "As ideias das pessoas são pedaços da sua felicidade."
    },
    {
        "author": "Arthur Schopenhauer",
        "phrase": "Quanto menos inteligente um homem é, menos misteriosa lhe parece a existência."
    },
    {
        "author": "Confúcio",
        "phrase": "O homem de palavra fácil e personalidade agradável raras vezes é homem de bem."
    },
    {
        "author": "Mahatma Gandhi",
        "phrase": "Cada dia a natureza produz o suficiente para nossa carência. Se cada um tomasse o que lhe fosse necessário, não havia pobreza no mundo e ninguém morreria de fome."
    },
    {
        "author": "William Shakespeare",
        "phrase": "Fortes razões, fazem fortes ações."
    },
    {
        "author": "Reinhold Niebuhr",
        "phrase": "Concedei-nos Senhor, serenidade necessária, para aceitar as coisas que não podemos modificar, coragem para modificar aquelas que podemos e sabedoria para distinguirmos umas das outras."
    },
    {
        "author": "Mahatma Gandhi",
        "phrase": "Nas grandes batalhas da vida, o primeiro passo para a vitória é o desejo de vencer."
    },
    {
        "author": "William Shakespeare",
        "phrase": "Ser grande é abraçar uma grande causa."
    },
    {
        "author": "Confúcio",
        "phrase": "Coloque a lealdade e a confiança acima de qualquer coisa; não te alies aos moralmente inferiores; não receies corrigir teus erros."
    },
    {
        "author": "William Shakespeare",
        "phrase": "Sabemos o que somos, mas não sabemos o que poderemos ser."
    },
    {
        "author": "Elbert Hubbard",
        "phrase": "O maior erro que você pode cometer é o de ficar o tempo todo com medo de cometer algum."
    },
    {
        "author": "Fernando Pessoa",
        "phrase": "O meu passado é tudo quanto não consegui ser. Nem as sensações de momentos idos me são saudosas: o que se sente exige o momento; passado este, há um virar de página e a história continua, mas não o texto."
    },
    {
        "author": "Cora Coralina",
        "phrase": "O que vale na vida não é o ponto de partida e sim a caminhada. Caminhando e semeando, no fim terás o que colher."
    },
    {
        "author": "Friedrich Nietzsche",
        "phrase": "Quem luta com monstros deve velar por que, ao fazê-lo, não se transforme também em monstro. E se tu olhares, durante muito tempo, para um abismo, o abismo também olha para dentro de ti."
    },
    {
        "author": "Dinamor",
        "phrase": "Quem quiser vencer na vida deve fazer como os seus sábios: mesmo com a alma partida, ter um sorriso nos lábios."
    },
    {
        "author": "Friedrich Nietzsche",
        "phrase": "Tudo é precioso para aquele que foi, por muito tempo, privado de tudo."
    },
    {
        "author": "William Shakespeare",
        "phrase": "A gratidão é o único tesouro dos humildes."
    },
    {
        "author": "Albert Einstein",
        "phrase": "A imaginação é mais importante que a ciência, porque a ciência é limitada, ao passo que a imaginação abrange o mundo inteiro."
    },
    {
        "author": "Platão",
        "phrase": "Quem comete uma injustiça é sempre mais infeliz que o injustiçado."
    },
    {
        "author": "Pitágoras",
        "phrase": "Com organização e tempo, acha-se o segredo de fazer tudo e bem feito."
    },
    {
        "author": "Confúcio",
        "phrase": "Qual seria a sua idade se você não soubesse quantos anos você tem?"
    },
    {
        "author": "Friedrich Nietzsche",
        "phrase": "É preciso ter o caos dentro de si para gerar uma estrela dançante."
    },
    {
        "author": "Friedrich Nietzsche",
        "phrase": "O verdadeiro homem quer duas coisas: perigo e jogo. Por isso quer a mulher: o jogo mais perigoso."
    },
    {
        "author": "Mario Quintana",
        "phrase": "No fim tu hás de ver que as coisas mais leves são as únicas\nque o vento não conseguiu levar:\num estribilho antigo\num carinho no momento preciso\no folhear de um livro de poemas\no cheiro que tinha um dia o próprio vento..."
    },
    {
        "author": "Sócrates",
        "phrase": "Uma vida sem desafios não vale a pena ser vivida."
    },
    {
        "author": "Luis Fernando Veríssimo",
        "phrase": "Mas eu desconfio que a única pessoa livre, realmente livre, é a que não tem medo do ridículo."
    },
    {
        "author": "Provérbio Chinês",
        "phrase": "Jamais se desespere em meio as sombrias aflições de sua vida, pois das nuvens mais negras cai água límpida e fecunda."
    },
    {
        "author": "Tumblr",
        "phrase": "As três regras da vida: sonhar, acreditar, realizar."
    },
    {
        "author": "Hugo Hofmannsthal",
        "phrase": "É preciso, no geral, acreditar em alguém, para, no particular, realmente nele depositar confiança."
    },
    {
        "author": "Giacomo Leopardi",
        "phrase": "O meio mais eficaz para obter fama é fazer o mundo acreditar que já se é famoso."
    },
    {
        "author": "Thomas Browne",
        "phrase": "Acreditar naquilo que é possível, não é fé, mas simples filosofia."
    },
    {
        "author": "Jean Clézio",
        "phrase": "Na minha opinião, escrever e comunicar significa ser capaz de fazer qualquer pessoa acreditar em qualquer coisa."
    },
    {
        "author": "Lou Holtz",
        "phrase": "Não posso acreditar que Deus nos colocou nessa terra para sermos ordinários."
    },
    {
        "author": "Tito Lívio",
        "phrase": "Quanto maior for a sorte, menos se deve acreditar nela."
    },
    {
        "author": "Romain Rolland",
        "phrase": "Agir é acreditar."
    },
    {
        "author": "Christian Hebbel",
        "phrase": "Muitas vezes a juventude é repreendida por acreditar que o mundo começa com ela. Mas a velhice acredita ainda mais frequentemente que o mundo termina com ela. O que é pior?"
    },
    {
        "author": "Casimir Delavigne",
        "phrase": "Quanto mais uma calúnia custa a acreditar, maior é a memória dos tolos para a fixar."
    },
    {
        "author": "Carlos Heitor Cony",
        "phrase": "Deixei de acreditar em Deus no dia em que vi o Brasil perder a Copa do Mundo no Maracanã..."
    },
    {
        "author": "Bernard Fontenelle",
        "phrase": "Uma circunstância imaginária que nós gostamos de acrescentar às nossas aflições é acreditar que seremos inconsoláveis."
    },
    {
        "author": "Aristóteles",
        "phrase": "O ignorante afirma, o sábio duvida, o sensato reflete."
    },
    {
        "author": "Desconhecido",
        "phrase": "A tradição é a personalidade dos imbecis."
    },
    {
        "author": "Sócrates",
        "phrase": "Só sei que nada sei."
    },
    {
        "author": "Confúcio",
        "phrase": "Eu não procuro saber as respostas, procuro compreender as perguntas."
    },
    {
        "author": "Jean-Jacques Rousseau",
        "phrase": "Geralmente aqueles que sabem pouco falam muito e aqueles que sabem muito falam pouco."
    },
    {
        "author": "Oscar Wilde",
        "phrase": "Se soubéssemos quantas e quantas vezes as nossas palavras são mal interpretadas, haveria muito mais silêncio neste mundo."
    },
    {
        "author": "Mario Quintana",
        "phrase": "Os verdadeiros analfabetos são os que aprenderam a ler e não leem."
    },
    {
        "author": "Mario Quintana",
        "phrase": "Dizes que a beleza não é nada? Imagina um hipopótamo com alma de anjo... Sim, ele poderá convencer os outros de sua angelitude - mas que trabalheira!"
    },
    {
        "author": "Gaston Bachelard",
        "phrase": "O real não é nunca aquilo em que se poderia acreditar, mas é sempre aquilo em que deveríamos ter pensado."
    },
    {
        "author": "Michel de Montaigne",
        "phrase": "Para os cristãos, encontrar algo inacreditável é uma bela ocasião para acreditar."
    },
    {
        "author": "Marcel Proust",
        "phrase": "Acreditar na medicina seria a suprema loucura se não acreditar nela não fosse uma maior ainda, pois desse acumular de erros, com o tempo, resultaram algumas verdades."
    },
    {
        "author": "Cesare Pavese",
        "phrase": "A religião consiste em acreditar que tudo aquilo que nos acontece é extraordinariamente importante. Nunca poderá desaparecer do mundo, justamente por essa razão."
    },
    {
        "author": "Sarah Meredith",
        "phrase": "Acreditar em si mesmo leva a um destino infinito.\nAcreditar que falhou é o fim da sua jornada."
    },
    {
        "author": "George Sand",
        "phrase": "Só se deverá acreditar num Deus que ordene aos homens a justiça e a igualdade."
    },
    {
        "author": "François Mauriac",
        "phrase": "Tenho dificuldade em acreditar na inocência das pessoas que viajam sozinhas."
    },
    {
        "author": "Sofocleto",
        "phrase": "Ter fé é muito simples. Difícil é acreditar nela."
    },
    {
        "author": "Jean Rostand",
        "phrase": "É durante a noite que é belo acreditar na luz."
    },
    {
        "author": "Machado de Assis",
        "phrase": "Creia em si, mas não duvide sempre dos outros."
    },
    {
        "author": "Carlos Drummond de Andrade",
        "phrase": "Há muitas razões para duvidar e uma só para crer."
    },
    {
        "author": "Oleg Taktarov",
        "phrase": "Eu acredito, eu luto até o fim: não há como perder, não há como não vencer."
    },
    {
        "author": "Luis Fernando Veríssimo",
        "phrase": "Os tristes acham que o vento geme;\nOs alegres acham que ele canta"
    },
    {
        "author": "Tumblr",
        "phrase": "Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas acima de tudo, seja você sempre."
    },
    {
        "author": "Theodore Roosevelt",
        "phrase": "Acredite que você pode, assim você já está no meio do caminho."
    },
    {
        "author": "Augusto Branco",
        "phrase": "Se você quer um pedacinho do paraíso, acredite em Deus.\nMas se você quer conquistar o mundo, acredite em você\nporque Deus já te deu tudo o que você precisa\npara você vencer."
    },
    {
        "author": "Anaïs Nin",
        "phrase": "Eu escolho um homem que não duvide de minha coragem, que não me acredite inocente, que tenha a coragem de me tratar como uma mulher."
    },
    {
        "author": "Cazuza",
        "phrase": "Acredite, existem pessoas que não procuram beleza, mas sim coração."
    },
    {
        "author": "Caio Fernando Abreu",
        "phrase": "Se eu disser que eu te amo, acredite. Não sou de brincar com sentimentos, sei o quanto dói."
    },
    {
        "author": "Paulo Coelho",
        "phrase": "Faça sua parte e não se preocupe com os outros. Acredite que Deus também fala com eles, e que eles estão tão empenhados quanto você em descobrir o sentido da vida."
    },
    {
        "author": "Jean Giraudoux",
        "phrase": "Os heróis são aqueles que tornam magnífica uma vida que já não podem suportar."
    },
    {
        "author": "Eurípedes Barsanulfo",
        "phrase": "Irmãos, sede os vencedores da rotina escravizante.\n\nEm cada dia renasce a luz de uma nova vida e com a morte somente morrem as ilusões.\n\nO espírito deve ser conhecido por suas obras.\n\nÉ necessário viver e servir.\n\nÉ necessário viver, meus irmãos, e ser mais do que o pó!"
    },
    {
        "author": "Hermann Hesse",
        "phrase": "Para um tal resultado, podia-se arriscar a vida. Era a este preço que se descobriam os mistérios da arte."
    },
    {
        "author": "Abigail Adams",
        "phrase": "Estes são tempos em que um gênio desejaria viver. Não é na calma tranquila da vida, ou no repouso de uma pacífica situação que os grandes caráteres são formados. Grandes necessidades invocam nossas maiores virtudes."
    },
    {
        "author": "Samuel Johnson",
        "phrase": "Dinheiro e tempo são os fardos mais pesados da vida. As pessoas mais infelizes são aquelas que têm tanto disso que não sabem o que fazer com ele."
    },
    {
        "author": "Jorge Luis Borges",
        "phrase": "aqui também essa desconhecida\ne ansiosa e breve coisa\nque é a vida"
    },
    {
        "author": "João Cabral de Melo Neto",
        "phrase": "A vida não se resolve com palavras."
    },
    {
        "author": "Tomas Tranströmer",
        "phrase": "No meio da vida acontece que a morte surge e mede o homem. A visita é esquecida e a vida continua. Mas o fato está feito, silenciosamente."
    },
    {
        "author": "Walter Bagehot",
        "phrase": "Um dos maiores prazeres da vida consiste em fazer o que os outros lhe dizem que você não pode."
    },
    {
        "author": "Alexandre Dumas (filho)",
        "phrase": "A vida é o último hábito que se deve perder, porque foi o primeiro que se tomou."
    },
    {
        "author": "Ernest Renan",
        "phrase": "O mais vulgar dos alunos sabe agora verdades pelas quais Arquimedes sacrificaria a vida."
    },
    {
        "author": "Juan Luis Vives",
        "phrase": "A vida, para os desconfiados e os temerosos, não é vida, mas uma morte constante."
    },
    {
        "author": "Plutarco",
        "phrase": "O maior e o mais velho amor, é o amor pela vida."
    },
    {
        "author": "Lord Byron",
        "phrase": "Quando tiramos a vida aos homens, não sabemos, nem o que lhes tiramos, nem o que lhes damos."
    },
    {
        "author": "John Dewey",
        "phrase": "Aprender? Certamente mas, primeiro, viver e aprender pela vida, na vida."
    },
    {
        "author": "Jean de la Bruyere",
        "phrase": "O avarento gasta mais no dia da sua morte do que gastou em dez anos de vida, e o seu herdeiro mais em dez meses do que ele na vida inteira."
    },
    {
        "author": "Italo Calvino",
        "phrase": "A vida de uma pessoa consiste num conjunto de acontecimentos, dos quais o último também poderia mudar o sentido de todo o conjunto."
    },
    {
        "author": "Marquês de Maricá",
        "phrase": "Há um limite nas dores e mágoas que termina a nossa vida, ou melhora a nossa sorte."
    },
    {
        "author": "Cícero",
        "phrase": "Para se ter vida longa é preciso viver devagar."
    },
    {
        "author": "Geraldo Eustáquio de Souza",
        "phrase": "Meu presente não é bom nem ruim. É o que a vida me dá. E fim."
    },
    {
        "author": "Sol Pinheiro",
        "phrase": "Otimismo é sabedoria!\nAcorde com alegria, não reclame da vida, agradeça, sorria, abrace seu dia e seja feliz!"
    },
    {
        "author": "Liahna Mell",
        "phrase": "Faça do hoje o seu dia mais especial... de coração radiante receba todas as maravilhas desta quinta-feira abençoada! Bom dia, Vida!"
    },
    {
        "author": "Jared Hassan",
        "phrase": "Todos os carinhos são especiais quando são sinceros, são verdadeiros quando vêm da alma e refletem nosso bem maior: a amizade e o amor."
    },
    {
        "author": "Liahna Mell",
        "phrase": "Uma semana maravilhosa e abençoada esta chegando! Que os nossos dias sejam radiantes, com alegrias e sorrisos... que as dificuldades nos fortaleçam e nos façam crescer espiritualmente como pessoas de bem, compartilhando sempre muitas esperanças!"
    },
    {
        "author": "Aluga-se Felicidade",
        "phrase": "Caso não haja nada ao seu lado. Olhe pra cima. As estrelas costumam clarear escuridões."
    },
    {
        "author": "À Procura da Felicidade",
        "phrase": "Filho não deixe ninguém te dizer que você não realizará seus sonhos."
    },
    {
        "author": "Marcelo Jeneci - Felicidade",
        "phrase": "Você vai rir, sem perceber, felicidade é só questão de ser."
    },
    {
        "author": "Felicidade por um Fio",
        "phrase": "Todos os dias recebo uma lição que me ensina que não posso deixar que aquilo que os outros pensam de mim me defina."
    },
    {
        "author": "Felicidade por um Fio",
        "phrase": "Eu me esforcei tanto para ser tudo o que ele queria e mesmo assim não foi o suficiente."
    },
    {
        "author": "Felicidade por um Fio",
        "phrase": "Você me ensinou a ser a garota que o cara quer, mas não a garota que eu quero ser."
    },
    {
        "author": "Felicidade por um Fio",
        "phrase": "Ela é bonita mas ela é muito mais do que isso."
    },
    {
        "author": "Felicidade por um Fio",
        "phrase": "Nunca deixe a opinião negativa de alguém sobre você se tornar a sua realidade."
    },
    {
        "author": "verdadeira felicidade reais conquistas",
        "phrase": "A verdadeira felicidade é aquela que vem através de nossas reais conquistas"
    },
    {
        "author": "Oliverio",
        "phrase": "Hoje não há ninguém aqui exceto você, eu e o que sentimos um pelo outro.\nVamos trancar as portas, deixar o mundo lá fora, explorar nossos corações, viver o nosso amor.\nVamos lutar por isso e fazer valer a pena."
    },
    {
        "author": "Mema velame",
        "phrase": "Nada é por acaso... Acredite em seus sonhos e nos seus potenciais... Na vida tudo se supera."
    },
    {
        "author": "Walt Disney",
        "phrase": "Fé, duas letras que podem mudar sua vida, acredite.\n(Peter Pan)"
    },
    {
        "author": "Flávio Souza",
        "phrase": "Chame o sucesso para fazer parte de sua vida. Acredite no seu potencial criador, seja inovador, treine sua mente para vencer, estipule metas e, principalmente, lute por seus ideais."
    },
    {
        "author": "Bellah Menina",
        "phrase": "Lute por aquilo que você acredite, não espere! A única pessoa que pode fazer a vida valer a pena é você mesma! Aprenda a se desafiar…"
    },
    {
        "author": "Rick Riordan",
        "phrase": "A vida só é preciosa porque termina, garoto. Acredite no que um Deus diz. Vocês mortais não sabem a sorte que têm."
    },
    {
        "author": "Ivan Teorilang",
        "phrase": "Acredite, como tudo na vida acontece por uma questão de hábito, com a tristeza não é diferente, se insistires em cultuá-la, estarás escancarando as portas para ela."
    },
    {
        "author": "Poder Além da Vida",
        "phrase": "Um guerreiro não desiste do que ama. Ele tem amor no que faz."
    },
    {
        "author": "Árvore da Vida (filme)",
        "phrase": "Algum dia você vai cair e chorar.\nE vai entender tudo. Todas as coisas."
    },
    {
        "author": "Poder Além da Vida",
        "phrase": "As batalhas que lutamos estão dentro de nós."
    },
    {
        "author": "Poder Além da Vida",
        "phrase": "Retire seu lixo mental. Ele atrapalha o que realmente importa: o aqui e agora"
    },
    {
        "author": "Poder Além da Vida",
        "phrase": "As pessoas temem o que há por dentro delas mesmo, mas é o único lugar que encontrarão o que precisam."
    },
    {
        "author": "Poder Além da Vida",
        "phrase": "Um guerreiro não desiste do que ele ama. Ele encontra amor no que faz. Ser guerreiro não exige perfeição. Ou vitória. Ou invulnerabilidade. Ele é a vulnerabilidade absoluta. Essa é a única coragem verdadeira"
    },
    {
        "author": "Poder Além da Vida",
        "phrase": "\"Todos lhe dizem o que fazer e o que é bom pra você. Não querem que você encontre suas própias respostas. Querem que você acredite nas respostas deles. Pare de escutar os outros e ouça o que tem no seu interior.\""
    },
    {
        "author": "Poder Além da Vida",
        "phrase": "\"Raiva, odio, violencia.tudo isso é só medo.\""
    },
    {
        "author": "Poder Além da Vida",
        "phrase": "\"Decisões impensadas levam a conseqüências trágicas!\""
    },
    {
        "author": "Poder Além da Vida",
        "phrase": "Onde você está? Aqui.\nQue horas são? Agora.\nO que é você? Esse momento."
    },
    {
        "author": "Poder Além da Vida",
        "phrase": "Primeira decepção (lição) do guerreiro: saber que não sabe..."
    },
    {
        "author": "Poder Além da Vida",
        "phrase": "\"Temos que aprender a jogar fora o lixo que impede de percebermos o que acontece e realmente importa\""
    },
    {
        "author": "Poder Além da Vida",
        "phrase": "\"Conhecimento não é o mesmo que sabedoria. A sabedoria está em agir.\""
    },
    {
        "author": "Poder Além da Vida",
        "phrase": "Sempre há algo acontecendo, não existem momentos comuns, nada é banal."
    },
    {
        "author": "Poder Além da Vida",
        "phrase": "\"O hábito é um problema. Só precisa estar consciente de suas escolhas e ser responsável por seus atos.\""
    },
    {
        "author": "Poder Além da Vida",
        "phrase": "Pare de reunir informação no seu exterior e comece a reunir informação no seu interior"
    },
    {
        "author": "Poder Além da Vida",
        "phrase": "\"as vezes precisamos enlouquecer para recuperar a sanidade\""
    },
    {
        "author": "Poder Além da Vida",
        "phrase": "\"Where are you? Here\nWhat time is it? Now\nWho are you? this moment\""
    },
    {
        "author": "Poder Além da Vida",
        "phrase": "As pessoas não são o que elas pensam, acham que são e depois ficam desapontadas."
    },
    {
        "author": "Poder Além da Vida",
        "phrase": "\"As pessoas não são o que elas pensam.\""
    },
    {
        "author": "Dale Carnegie",
        "phrase": "Tente a sua sorte! A vida é feita de oportunidades. O homem que vai mais longe é quase sempre aquele que tem coragem de arriscar."
    },
    {
        "author": "Sigmund Freud",
        "phrase": "Não posso imaginar que uma vida sem trabalho seja capaz de trazer qualquer espécie de conforto. A imaginação criadora e o trabalho para mim andam de mãos dadas; não retiro prazer de nenhuma outra coisa."
    },
    {
        "author": "Johann Goethe",
        "phrase": "O mais belo estado da vida é a dependência livre e voluntária: e como seria ela possível sem amor?"
    },
    {
        "author": "Carl Sagan",
        "phrase": "Às vezes acredito que há vida em outros planetas às vezes eu acredito que não. Em qualquer dos casos, a conclusão é assombrosa."
    },
    {
        "author": "Mahatma Gandhi",
        "phrase": "Só engrandecemos o nosso direito à vida cumprindo o nosso dever de cidadãos do mundo."
    },
    {
        "author": "Bertolt Brecht",
        "phrase": "Temam menos a morte e mais a vida insuficiente."
    },
    {
        "author": "Friedrich Nietzsche",
        "phrase": "Na minha vida ainda preciso de discípulos, e se os meus livros não serviram de anzol, falharam a sua intenção. O melhor e essencial só se pode comunicar de homem para homem."
    },
    {
        "author": "Johann Goethe",
        "phrase": "Só é digno da liberdade, como da vida, aquele que se empenha em conquistá-la."
    },
    {
        "author": "Henry David Thoreau",
        "phrase": "Muitos homens iniciaram uma nova era na sua vida a partir da leitura de um livro."
    },
    {
        "author": "Sófocles",
        "phrase": "Os filhos são para as mães as âncoras da sua vida."
    },
    {
        "author": "Groucho Marx",
        "phrase": "Há tantas coisas na vida mais importantes que o dinheiro. Mas, custam tanto."
    },
    {
        "author": "Ralph Waldo Emerson",
        "phrase": "Não aprendeu a lição da vida quem não domina o medo de cada dia."
    },
    {
        "author": "Alberto Caeiro",
        "phrase": "É Talvez o Último Dia da Minha Vida\n\nÉ talvez o último dia da minha vida.\nSaudei o sol, levantando a mão direita,\nMas não o saudei, dizendo-lhe adeus,\nFiz sinal de gostar de o ver antes: mais nada."
    },
    {
        "author": "Jesus Cristo",
        "phrase": "Conselhos ruins podem acabar com um dia, um ano ou uma vida inteira."
    },
    {
        "author": "Oscar Wilde",
        "phrase": "Cada um de nós para o tempo em busca do segredo da vida. O segredo da vida está na arte."
    },
    {
        "author": "Samuel Butler",
        "phrase": "A vida é como a música. Deve ser composta de ouvido, com sensibilidade e intuição, nunca por normas rígidas."
    },
    {
        "author": "Fidel Castro",
        "phrase": "Um revolucionário pode perder tudo: a família, a liberdade, até a vida. Menos a moral."
    },
    {
        "author": "Henry Beecher",
        "phrase": "As horas mais tristes da vida são aquelas em que duvidamos de nós próprios."
    },
    {
        "author": "Friedrich Nietzsche",
        "phrase": "Toda a arte e toda a filosofia podem ser consideradas como remédios da vida, ajudantes do seu crescimento ou bálsamo dos combates: postulam sempre sofrimento e sofredores."
    },
    {
        "author": "Joseph Campbell",
        "phrase": "Precisamos estar dispostos a nos livrar da vida que planejamos, para podermos viver a vida que nos espera. A pele velha tem que cair para que uma nova possa nascer."
    },
    {
        "author": "Martha Medeiros",
        "phrase": "PEDAÇOS DE MIM\n\nEu sou feito de\nSonhos interrompidos\ndetalhes despercebidos\namores mal resolvidos\n\nSou feito de\nChoros sem ter razão\npessoas no coração\natos por impulsão\n\nSinto falta de\nLugares que não conheci\nexperiências que não vivi\nmomentos que já esqueci\n\nEu sou\nAmor e carinho constante\ndistraída até o bastante\nnão paro por instante\n\nJá\nTive noites maldormidas\nperdi pessoas muito queridas\ncumpri coisas não prometidas\n\nMuitas vezes eu\nDesisti sem mesmo tentar\npensei em fugir, para não enfrentar\nsorri para não chorar\n\nEu sinto pelas\nCoisas que não mudei\namizades que não cultivei\naqueles que eu julguei\ncoisas que eu falei\n\nTenho saudade\nDe pessoas que fui conhecendo\nlembranças que fui esquecendo\namigos que acabei perdendo\nMas continuo vivendo e aprendendo."
    },
    {
        "author": "Albert Einstein",
        "phrase": "O mundo não está ameaçado pelas pessoas más, e sim por aquelas que permitem a maldade."
    },
    {
        "author": "Martha Medeiros",
        "phrase": "Eu, modo de usar:\n\nPode invadir ou chegar com delicadeza, mas não tão devagar que me faça dormir. Não grite comigo, tenho o péssimo hábito de revidar. Acordo pela manhã com ótimo humor mas… permita que eu escove os dentes primeiro. Toque muito em mim, principalmente nos cabelos e minta sobre minha nocauteante beleza.\nTenho vida própria, me faça sentir saudades, conte algumas coisas que me façam rir, mas não conte piadas e nem seja preconceituoso, não perca tempo, cultivando este tipo de herança de seus pais. Viaje antes de me conhecer, sofra antes de mim para reconhecer-me um porto, um albergue da juventude. Eu saio em conta, você não gastará muito comigo. Acredite nas verdades que digo e também nas mentiras, elas serão raras e sempre por uma boa causa. Respeite meu choro, me deixe sozinha, só volte quando eu chamar e, não me obedeça sempre que eu também gosto de ser contrariada. (Então fique comigo quando eu chorar, combinado?).\nSeja mais forte que eu e menos altruísta! Não se vista tão bem… gosto de camisa para fora da calça, gosto de braços, gosto de pernas e muito de pescoço. Reverenciarei tudo em você que estiver a meu gosto: boca, cabelos, os pelos do peito e um joelho esfolado, você tem que se esfolar às vezes, mesmo na sua idade. Leia, escolha seus próprios livros, releia-os. Odeie a vida doméstica e os agitos noturnos. Seja um pouco caseiro e um pouco da vida, não de boate que isto é coisa de gente triste. Não seja escravo da televisão, nem xiita contra. Nem escravo meu, nem filho meu, nem meu pai. Escolha um papel para você que ainda não tenha sido preenchido e o invente muitas vezes.\nMe enlouqueça uma vez por mês mas, me faça uma louca boa, uma louca que ache graça em tudo que rime com louca: loba, boba, rouca, boca… Goste de música e de sexo. Goste de um esporte não muito banal. Não invente de querer muitos filhos, me carregar pra a missa, apresentar sua família… isso a gente vê depois… se calhar… deixa eu dirigir o seu carro, que você adora. Quero ver você nervoso, inquieto, olhe para outras mulheres, tenha amigos e digam muitas bobagens juntos. Não me conte seus segredos… me faça massagem nas costas. Não fume, beba, chore, eleja algumas contravenções. Me rapte! Se nada disso funcionar… experimente me amar!"
    },
    {
        "author": "Desconhecido",
        "phrase": "Hoje levantei cedo pensando no que tenho a fazer antes que o relógio marque meia noite. É minha função escolher que tipo de dia vou ter hoje. Posso reclamar porque está chovendo ou agradecer às águas por lavarem a poluição. Posso ficar triste por não ter dinheiro ou me sentir encorajado para administrar minhas finanças, evitando o desperdício. Posso reclamar sobre minha saúde ou dar graças por estar vivo. Posso me queixar dos meus pais por não terem me dado tudo o que eu queria ou posso ser grato por ter nascido. Posso reclamar por ter que ir trabalhar ou agradecer por ter trabalho. Posso sentir tédio com o trabalho doméstico ou agradecer a Deus. Posso lamentar decepções com amigos ou me entusiasmar com a possibilidade de fazer novas amizades. Se as coisas não saíram como planejei posso ficar feliz por ter hoje para recomeçar. O dia está na minha frente esperando para ser o que eu quiser. E aqui estou eu, o escultor que pode dar forma. Tudo depende só de mim."
    },
    {
        "author": "Chico Xavier",
        "phrase": "A gente pode morar numa casa mais ou menos, numa rua mais ou menos, numa cidade mais ou menos, e até ter um governo mais ou menos.\nA gente pode dormir numa cama mais ou menos, comer um feijão mais ou menos, ter um transporte mais ou menos, e até ser obrigado a acreditar mais ou menos no futuro.\nA gente pode olhar em volta e sentir que tudo está mais ou menos...\n\nTudo bem!\n\nO que a gente não pode mesmo, nunca, de jeito nenhum...\né amar mais ou menos, sonhar mais ou menos, ser amigo mais ou menos, namorar mais ou menos, ter fé mais ou menos, e acreditar mais ou menos.\nSenão a gente corre o risco de se tornar uma pessoa mais ou menos."
    },
    {
        "author": "Aguinaldo Silva",
        "phrase": "Saudade é solidão acompanhada,\né quando o amor ainda não foi embora,\nmas o amado já...\n\nSaudade é amar um passado que ainda não passou,\né recusar um presente que nos machuca,\né não ver o futuro que nos convida...\n\nSaudade é sentir que existe o que não existe mais...\n\nSaudade é o inferno dos que perderam,\né a dor dos que ficaram para trás,\né o gosto de morte na boca dos que continuam...\n\nSó uma pessoa no mundo deseja sentir saudade:\naquela que nunca amou.\n\nE esse é o maior dos sofrimentos:\nnão ter por quem sentir saudades,\npassar pela vida e não viver.\n\nO maior dos sofrimentos é nunca ter sofrido."
    },
    {
        "author": "Myrtes Mathias",
        "phrase": "Amor é síntese\n\nPor favor, não me analise\nNão fique procurando\ncada ponto fraco meu\nSe ninguém resiste a uma análise\nprofunda, quanto mais eu!\nCiumenta, exigente, insegura, carente\ntoda cheia de marcas que a vida deixou:\nVeja em cada exigência\num grito de carência,\num pedido de amor!\n\nAmor, amor é síntese,\numa integração de dados:\nnão há que tirar nem pôr.\nNão me corte em fatias,\n(ninguém abraça um pedaço),\nme envolva todo em seus braços\nE eu serei perfeita, amor!"
    },
    {
        "author": "Mario Quintana",
        "phrase": "DAS UTOPIAS\n\nSe as coisas são inatingíveis... ora!\nNão é motivo para não querê-las...\nQue tristes os caminhos, se não fora\nA presença distante das estrelas!"
    },
    {
        "author": "Clarice Lispector",
        "phrase": "Olhe, tenho uma alma muito prolixa e uso poucas palavras.\nSou irritável e firo facilmente.\nTambém sou muito calmo e perdoo logo.\nNão esqueço nunca.\nMas há poucas coisas de que eu me lembre."
    },
    {
        "author": "Lilian Tonet",
        "phrase": "As pessoas entram em nossa vida por acaso, mas não é por acaso que elas permanecem."
    },
    {
        "author": "Vinicius de Moraes",
        "phrase": "Tomara\nQue você volte depressa\nQue você não se despeça\nNunca mais do meu carinho\nE chore, se arrependa\nE pense muito\nQue é melhor se sofrer junto\nQue viver feliz sozinho\n\nTomara\nQue a tristeza te convença\nQue a saudade não compensa\nE que a ausência não dá paz\nE o verdadeiro amor de quem se ama\nTece a mesma antiga trama\nQue não se desfaz\n\nE a coisa mais divina\nQue há no mundo\nÉ viver cada segundo\nComo nunca mais..."
    },
    {
        "author": "Desconhecido",
        "phrase": "Feliz aniversário\n\nUm momento especial de renovação para sua alma e seu espírito, porque Deus, na sua infinita sabedoria, deu à natureza a capacidade de desabrochar a cada nova estação e a nós, capacidade de recomeçar a cada ano.\nDesejo a você um ano cheio de amor e de alegrias.\nAfinal, fazer aniversário é ter a chance de fazer novos amigos, ajudar mais pessoas, aprender e ensinar novas lições, vivenciar outras dores e suportar velhos problemas.\nSorrir novos motivos e chorar outros, porque amar o próximo é dar mais amparo, rezar mais preces e agradecer mais vezes.\nFazer aniversário é amadurecer um pouco mais e olhar a vida como uma dádiva de Deus.\nÉ ser grato, reconhecido, forte, destemido.\nÉ ser rima, é ser verso, é ver Deus no universo;\nParabéns a você nesse dia tão grandioso."
    },
    {
        "author": "Clarice Lispector",
        "phrase": "Porque eu fazia do amor um cálculo matemático errado: pensava que, somando as compreensões, eu amava. Não sabia que, somando as incompreensões é que se ama verdadeiramente. Porque eu, só por ter tido carinho, pensei que amar é fácil."
    },
    {
        "author": "Martha Medeiros",
        "phrase": "Sentir-se amado\n\nO cara diz que te ama, então tá. Ele te ama.\n\nSua mulher diz que te ama, então assunto encerrado.\n\nVocê sabe que é amado porque lhe disseram isso, as três palavrinhas mágicas. Mas saber-se amado é uma coisa, sentir-se amado é outra, uma diferença de milhas, um espaço enorme para a angústia instalar-se.\n\nA demonstração de amor requer mais do que beijos, sexo e verbalização, apesar de não sonharmos com outra coisa: se o cara beija, transa e diz que me ama, tenha a santa paciência, vou querer que ele faça pacto de sangue também?\n\nPactos. Acho que é isso. Não de sangue nem de nada que se possa ver e tocar. É um pacto silencioso que tem a força de manter as coisas enraizadas, um pacto de eternidade, mesmo que o destino um dia venha a dividir o caminho dos dois.\n\nSentir-se amado é sentir que a pessoa tem interesse real na sua vida, que zela pela sua felicidade, que se preocupa quando as coisas não estão dando certo, que sugere caminhos para melhorar, que coloca-se a postos para ouvir suas dúvidas e que dá uma sacudida em você, caso você esteja delirando. \"Não seja tão severa consigo mesma, relaxe um pouco. Vou te trazer um cálice de vinho\".\n\nSentir-se amado é ver que ela lembra de coisas que você contou dois anos atrás, é vê-la tentar reconciliar você com seu pai, é ver como ela fica triste quando você está triste e como sorri com delicadeza quando diz que você está fazendo uma tempestade em copo d´água. \"Lembra que quando eu passei por isso você disse que eu estava dramatizando? Então, chegou sua vez de simplificar as coisas. Vem aqui, tira este sapato.\"\n\nSentem-se amados aqueles que perdoam um ao outro e que não transformam a mágoa em munição na hora da discussão. Sente-se amado aquele que se sente aceito, que se sente bem-vindo, que se sente inteiro. Sente-se amado aquele que tem sua solidão respeitada, aquele que sabe que não existe assunto proibido, que tudo pode ser dito e compreendido. Sente-se amado quem se sente seguro para ser exatamente como é, sem inventar um personagem para a relação, pois personagem nenhum se sustenta muito tempo. Sente-se amado quem não ofega, mas suspira; quem não levanta a voz, mas fala; quem não concorda, mas escuta.\n\nAgora sente-se e escute: eu te amo não diz tudo ."
    },
    {
        "author": "Silvana Cervantes",
        "phrase": "Coisas que a vida me ensinou em 40 anos\n\nAmor não se implora, não se pede\nnão se espera...\nAmor se vive ou não.\nCiúmes é um sentimento inútil.\nNão torna ninguém fiel a você.\nAnimais são anjos disfarçados, mandados\nà terra por Deus para mostrar ao homem\nO que é fidelidade.\nCrianças aprendem com aquilo que você faz,\nnão com o que você diz.\nAs pessoas que falam dos outros pra você,\nvão falar de você para os outros.\nPerdoar e esquecer nos torna mais jovens.\nÁgua é um santo remédio.\nDeus inventou o choro para o homem não explodir.\nAusência de regras, é uma regra que depende do bom senso.\nNão existe comida ruim, existe comida mal temperada.\nA criatividade caminha junto com a falta de grana.\nSer autêntico é a melhor e única forma de agradar.\nAmigos de verdade nunca te abandonam.\nO carinho é a melhor arma contra o ódio.\nAs diferenças tornam a vida mais bonita e colorida.\nHá poesia em toda a criação divina,\nDeus é o maior poeta de todos os\nTempos.\nA música é a sobremesa da vida.\nAcreditar, não faz de ninguém um tolo\nTolo é quem mente.\nFilhos são presentes raros.\nDe tudo, o que fica é o seu nome e as lembranças\nA cerca de suas ações.\nObrigada, desculpa, por favor,\nsão palavras mágicas, chaves que abrem\nPortas para uma vida melhor\nO amor... Ah, o amor...\nO amor quebra barreiras, une facções,\ndestrói preconceitos, cura doenças...\nNão há vida decente sem amor!\nE é certo, quem ama, é muito amado."
    },
    {
        "author": "Sócrates",
        "phrase": "Para conseguir a amizade de uma pessoa digna é preciso desenvolvermos em nós mesmos as qualidades que naquela admiramos."
    },
    {
        "author": "Desconhecido",
        "phrase": "Não cruze os braços diante de uma dificuldade, pois o maior homem do mundo morreu de braços abertos!"
    },
    {
        "author": "William Shakespeare",
        "phrase": "Aceita o conselho dos outros, mas nunca desistas da tua própria opinião."
    },
    {
        "author": "Carlos Drummond de Andrade",
        "phrase": "Se você sabe explicar o que sente, não ama, pois o amor foge de todas as explicações possíveis."
    },
    {
        "author": "Clarice Lispector",
        "phrase": "Mas tenho medo do que é novo e tenho medo de viver o que não entendo - quero sempre ter a garantia de pelo menos estar pensando que entendo, não sei me entregar à desorientação."
    },
    {
        "author": "Tati Bernardi",
        "phrase": "DAR NÃO É FAZER AMOR\n\nDar é dar.\nFazer amor é lindo, é sublime, é encantador, é esplêndido.\nMas dar é bom pra cacete.\nDar é aquela coisa que alguém te puxa os cabelos da nuca...\nTe chama de nomes que eu não escreveria...\nNão te vira com delicadeza...\nNão sente vergonha de ritmos animais. Dar é bom.\nMelhor do que dar, só dar por dar.\nDar sem querer casar....\nSem querer apresentar pra mãe...\nSem querer dar o primeiro abraço no Ano Novo.\nDar porque o cara te esquenta a coluna vertebral...\nTe amolece o gingado...\nTe molha o instinto.\nDar porque a vida é estressante e dar relaxa.\nDar porque se você não der para ele hoje, vai dar amanhã, ou depois de amanhã.\nTem pessoas que você vai acabar dando, não tem jeito.\nDar sem esperar ouvir promessas, sem esperar ouvir carinhos, sem\nesperar ouvir futuro.\nDar é bom, na hora.\nDurante um mês.\nPara os mais desavisados, talvez anos.\n\nMas dar é dar demais e ficar vazio.\nDar é não ganhar.\nÉ não ganhar um eu te amo baixinho perdido no meio do escuro.\nÉ não ganhar uma mão no ombro quando o caos da cidade parece querer te abduzir.\nÉ não ter alguém pra querer casar, para apresentar pra mãe, pra dar\no primeiro abraço de Ano Novo e pra falar:\n\"Que que cê acha amor?\".\nÉ não ter companhia garantida para viajar.\nÉ não ter para quem ligar quando recebe uma boa notícia.\nDar é não querer dormir encaixadinho...\nÉ não ter alguém para ouvir seus dengos...\nMas dar é inevitável, dê mesmo, dê sempre, dê muito.\n\nMas dê mais ainda, muito mais do que qualquer coisa, uma chance ao amor.\nEsse sim é o maior tesão.\nEsse sim relaxa, cura o mau humor, ameniza todas as crises e faz você flutuar\n\nExperimente ser amado..."
    },
    {
        "author": "Clarice Lispector",
        "phrase": "Passei a vida tentando corrigir os erros que cometi na minha ânsia de acertar."
    },
    {
        "author": "Bob Marley",
        "phrase": "Os homens pensam que possuem uma mente, mas é a mente que os possui."
    },
    {
        "author": "Nemo Nox",
        "phrase": "Pedras no caminho? Eu guardo todas. Um dia vou construir um castelo."
    },
    {
        "author": "Aguinaldo Silva",
        "phrase": "Saudade é amar um passado que ainda não passou,\nÉ recusar um presente que nos machuca,\nÉ não ver o futuro que nos convida..."
    },
    {
        "author": "Albert Einstein",
        "phrase": "Se A é o sucesso, então A é igual a X mais Y mais Z. O trabalho é X; Y é o lazer; e Z é manter a boca fechada."
    },
    {
        "author": "Machado de Assis",
        "phrase": "Esquecer é uma necessidade. A vida é uma lousa, em que o destino, para escrever um novo caso, precisa de apagar o caso escrito."
    },
    {
        "author": "Desconhecido",
        "phrase": "APRENDI\n\nAprendi que eu não posso exigir o amor de ninguém, posso apenas dar boas razões para que gostem de mim e ter paciência, para que a vida faça o resto.\n\nAprendi que não importa o quanto certas coisas sejam importantes para mim, tem gente que não dá a mínima e eu jamais conseguirei convencê-las.\n\nAprendi que posso passar anos construindo uma verdade e destruí-la em apenas alguns segundos. Que posso usar meu charme por apenas 15 minutos, depois disso, preciso saber do que estou falando.\n\nEu aprendi... Que posso fazer algo em um minuto e ter que responder por isso o resto da vida. Que por mais que se corte um pão em fatias, esse pão continua tendo duas faces, e o mesmo vale para tudo o que cortamos em nosso caminho.\n\nAprendi... Que vai demorar muito para me transformar na pessoa que quero ser, e devo ter paciência. Mas, aprendi também, que posso ir além dos limites que eu próprio coloquei.\n\nAprendi que preciso escolher entre controlar meus pensamentos ou ser controlado por eles. Que os heróis são pessoas que fazem o que acham que devem fazer naquele momento, independentemente do medo que sentem.\n\nAprendi que perdoar exige muita prática. Que há muita gente que gosta de mim, mas não consegue expressar isso.\n\nAprendi... Que nos momentos mais difíceis a ajuda veio justamente daquela pessoa que eu achava que iria tentar piorar as coisas.\n\nAprendi que posso ficar furioso, tenho direito de me irritar, mas não tenho o direito de ser cruel. Que jamais posso dizer a uma criança que seus sonhos são impossíveis, pois seria uma tragédia para o mundo se eu conseguisse convencê-la disso.\n\nEu aprendi... que meu melhor amigo vai me machucar de vez em quando, que eu tenho que me acostumar com isso. Que não é o bastante ser perdoado pelos outros, eu preciso me perdoar primeiro.\n\nAprendi que, não importa o quanto meu coração esteja sofrendo, o mundo não vai parar por causa disso.\n\nEu aprendi... Que as circunstâncias de minha infância são responsáveis pelo que eu sou, mas não pelas escolhas que eu faço quando adulto.\n\nAprendi que numa briga eu preciso escolher de que lado estou, mesmo quando não quero me envolver. Que, quando duas pessoas discutem, não significa que elas se odeiem; e quando duas pessoas não discutem não significa que elas se amem.\n\nAprendi que por mais que eu queira proteger os meus filhos, eles vão se machucar e eu também. Isso faz parte da vida.\n\nAprendi que a minha existência pode mudar para sempre, em poucas horas, por causa de gente que eu nunca vi antes.\n\nAprendi também que diplomas na parede não me fazem mais respeitável ou mais sábio.\n\nAprendi que as palavras de amor perdem o sentido, quando usadas sem critério. E que amigos não são apenas para guardar no fundo do peito, mas para mostrar que são amigos.\n\nAprendi que certas pessoas vão embora da nossa vida de qualquer maneira, mesmo que desejemos retê-las para sempre.\n\nAprendi, afinal, que é difícil traçar uma linha entre ser gentil, não ferir as pessoas, e saber lutar pelas coisas em que acredito."
    },
    {
        "author": "Mario Quintana",
        "phrase": "AS INDAGAÇÕES\n\nA resposta certa, não importa nada: o essencial é que as perguntas estejam certas."
    },
    {
        "author": "Glácia Daibert",
        "phrase": "Nem tudo é fácil\n\nÉ difícil fazer alguém feliz, assim como é fácil fazer triste.\nÉ difícil dizer eu te amo, assim como é fácil não dizer nada\nÉ difícil valorizar um amor, assim como é fácil perdê-lo para sempre.\nÉ difícil agradecer pelo dia de hoje, assim como é fácil viver mais um dia.\nÉ difícil enxergar o que a vida traz de bom, assim como é fácil fechar os olhos e atravessar a rua.\nÉ difícil se convencer de que se é feliz, assim como é fácil achar que sempre falta algo.\nÉ difícil fazer alguém sorrir, assim como é fácil fazer chorar.\nÉ difícil colocar-se no lugar de alguém, assim como é fácil olhar para o próprio umbigo.\nSe você errou, peça desculpas...\nÉ difícil pedir perdão? Mas quem disse que é fácil ser perdoado?\nSe alguém errou com você, perdoa-o...\nÉ difícil perdoar? Mas quem disse que é fácil se arrepender?\nSe você sente algo, diga...\nÉ difícil se abrir? Mas quem disse que é fácil encontrar\nalguém que queira escutar?\nSe alguém reclama de você, ouça...\nÉ difícil ouvir certas coisas? Mas quem disse que é fácil ouvir você?\nSe alguém te ama, ame-o...\nÉ difícil entregar-se? Mas quem disse que é fácil ser feliz?\nNem tudo é fácil na vida... Mas, com certeza, nada é impossível\nPrecisamos acreditar, ter fé e lutar para que não apenas sonhemos,\nMas também tornemos todos esses desejos, realidade!"
    },
    {
        "author": "Desconhecido",
        "phrase": "Para se roubar um coração\n\nPara se roubar um coração, é preciso que seja com muita habilidade, tem que ser vagarosamente, disfarçadamente, não se chega com ímpeto, não se alcança o coração de alguém com pressa.\nTem que se aproximar com meias palavras, suavemente, apoderar-se dele aos poucos, com cuidado.\nNão se pode deixar que percebam que ele será roubado, na verdade, teremos que furtá-lo, docemente.\nConquistar um coração de verdade dá trabalho, requer paciência, é como se fosse tecer uma colcha de retalhos, aplicar uma renda em um vestido, tratar de um jardim, cuidar de uma criança.\nÉ necessário que seja com destreza, com vontade, com encanto, carinho e sinceridade.\nPara se conquistar um coração definitivamente tem que ter garra e esperteza, mas não falo dessa esperteza que todos conhecem, falo da esperteza de sentimentos, daquela que existe guardada na alma em todos os momentos.\nQuando se deseja realmente conquistar um coração, é preciso que antes já tenhamos conseguido conquistar o nosso, é preciso que ele já tenha sido explorado nos mínimos detalhes, que já se tenha conseguido conhecer cada cantinho, entender cada espaço preenchido e aceitar cada espaço vago.\n...e então, quando finalmente esse coração for conquistado, quando tivermos nos apoderado dele, vai existir uma parte de alguém que seguirá conosco.\nUma metade de alguém que será guiada por nós e o nosso coração passará a bater por conta desse outro coração.\nEles sofrerão altos e baixos sim, mas com certeza haverá instantes, milhares de instantes de alegria.\nBaterá descompassado muitas vezes e sabe por que?\nFaltará a metade dele que ainda não está junto de nós.\nAté que um dia, cansado de estar dividido ao meio, esse coração chamará a sua outra parte e alguém por vontade própria, sem que precisemos roubá-la ou furtá-la nos entregará a metade que faltava.\n... e é assim que se rouba um coração, fácil não?\nPois é, nós só precisaremos roubar uma metade, a outra virá na nossa mão e ficará detectado um roubo então!\nE é só por isso que encontramos tantas pessoas pela vida a fora que dizem que nunca mais conseguiram amar alguém... é simples... é porque elas não possuem mais coração, eles foram roubados, arrancados do seu peito, e somente com um grande amor ela terá um novo coração, afinal de contas, corações são para serem divididos, e com certeza esse grande amor repartirá o dele com você."
    },
    {
        "author": "Platão",
        "phrase": "Tente mover o mundo – o primeiro passo será mover a si mesmo."
    },
    {
        "author": "François de Bitencourt",
        "phrase": "Não deixe de acreditar no amor, mas certifique-se de estar entregando seu coração para alguém que dê valor aos mesmos sentimentos que você dá, manifeste suas idéias e planos, para saber se vocês combinam, e certifique-se de que quando estão juntos aquele abraço vale mais que qualquer palavra..."
    },
    {
        "author": "Mario Quintana",
        "phrase": "DA OBSERVAÇÃO\n\nNão te irrites, por mais que te fizerem\nEstuda, a frio, o coração alheio.\nFarás, assim, do mal que eles te querem,\nTeu mais amável e sutil recreio."
    },
    {
        "author": "Rabindranath Tagore",
        "phrase": "Se choras por não teres visto o pôr do sol, as lágrimas não te deixarão ver as estrelas."
    },
    {
        "author": "Paulo Coelho",
        "phrase": "Podemos acreditar que tudo que a vida nos oferecerá no futuro é repetir o que fizemos ontem e hoje. Mas, se prestarmos atenção, vamos nos dar conta de que nenhum dia é igual a outro. Cada manhã traz uma bênção escondida; uma bênção que só serve para esse dia e que não se pode guardar nem desaproveitar. Se não usamos este milagre hoje, ele vai se perder. Este milagre está nos detalhes do cotidiano; é preciso viver cada minuto porque ali encontramos a saída de nossas confusões, a alegria de nossos bons momentos, a pista correta para a decisão que tomaremos. Nunca podemos deixar que cada dia pareça igual ao anterior porque todos os dias são diferentes, porque estamos em constante processo de mudança."
    },
    {
        "author": "Amyr Klink",
        "phrase": "Quem tem um amigo, mesmo que um só, não importa onde se encontre, jamais sofrerá de solidão; poderá morrer de saudades, mas não estará só."
    },
    {
        "author": "Thaísa Lima",
        "phrase": "Sou pessoa de dentro pra fora. Minha beleza está na minha essência e no meu caráter. Acredito em sonhos, não em utopia. Mas quando sonho, sonho alto. Estou aqui é pra viver, cair, aprender, levantar e seguir em frente.\nSou isso hoje...\nAmanhã, já me reinventei.\nReinvento-me sempre que a vida pede um pouco mais de mim.\nSou complexa, sou mistura, sou mulher com cara de menina... E vice-versa. Me perco, me procuro e me acho. E quando necessário, enlouqueço e deixo rolar...\nNão me dou pela metade, não sou tua meio amiga nem teu quase amor. Ou sou tudo ou sou nada. Não suporto meio termos. Sou boba, mas não sou burra. Ingênua, mas não santa. Sou pessoa de riso fácil... e choro também!"
    },
    {
        "author": "Sócrates",
        "phrase": "Deve-se temer mais o amor de uma mulher do que o ódio de um homem."
    },
    {
        "author": "Augusto Cury",
        "phrase": "Desejo que você\nNão tenha medo da vida, tenha medo de não vivê-la.\nNão há céu sem tempestades, nem caminhos sem acidentes.\nSó é digno do pódio quem usa as derrotas para alcançá-lo.\nSó é digno da sabedoria quem usa as lágrimas para irrigá-la.\nOs frágeis usam a força; os fortes, a inteligência.\nSeja um sonhador, mas una seus sonhos com disciplina,\nPois sonhos sem disciplina produzem pessoas frustradas.\nSeja um debatedor de ideias. Lute pelo que você ama."
    },
    {
        "author": "Buda",
        "phrase": "Não acredite em algo simplesmente porque ouviu. Não acredite em algo simplesmente porque todos falam a respeito. Não acredite em algo simplesmente porque está escrito em seus livros religiosos. Não acredite em algo só porque seus professores e mestres dizem que é verdade. Não acredite em tradições só porque foram passadas de geração em geração. Mas, depois de muita análise e observação, se você vê que algo concorda com a razão e que conduz ao bem e benefício de todos, aceite-o e viva-o."
    },
    {
        "author": "Cora Coralina",
        "phrase": "Feliz aquele que transfere o que sabe e aprende o que ensina."
    },
    {
        "author": "Vinicius de Moraes",
        "phrase": "Soneto do Amor Total\n\nAmo-te tanto, meu amor... não cante\nO humano coração com mais verdade...\nAmo-te como amigo e como amante\nNuma sempre diversa realidade.\n\nAmo-te afim, de um calmo amor prestante\nE te amo além, presente na saudade.\nAmo-te, enfim, com grande liberdade\nDentro da eternidade e a cada instante.\n\nAmo-te como um bicho, simplesmente\nDe um amor sem mistério e sem virtude\nCom um desejo maciço e permanente.\n\nE de te amar assim, muito e amiúde\nÉ que um dia em teu corpo de repente\nHei de morrer de amar mais do que pude."
    },
    {
        "author": "William Shakespeare",
        "phrase": "O amor não se vê com os olhos mas com o coração."
    },
    {
        "author": "Friedrich Nietzsche",
        "phrase": "Quanto mais nos elevamos, menores parecemos aos olhos daqueles que não sabem voar."
    },
    {
        "author": "Ailin Aleixo",
        "phrase": "SEJA UM IDIOTA\n\nA idiotice é vital para a felicidade.\n\nGente chata essa que quer ser séria, profunda e visceral sempre. Putz! A vida já é um caos, por que fazermos dela, ainda por cima, um tratado? Deixe a seriedade para as horas em que ela é inevitável: mortes, separações, dores e afins.\n\nNo dia-a-dia, pelo amor de Deus, seja idiota! Ria dos próprios defeitos. E de quem acha defeitos em você. Ignore o que o boçal do seu chefe disse. Pense assim: quem tem que carregar aquela cara feia, todos os dias, inseparavelmente, é ele. Pobre dele.\n\nMilhares de casamentos acabaram-se não pela falta de amor, dinheiro, sexo, sincronia, mas pela ausência de idiotice. Trate seu amor como seu melhor amigo, e pronto.\n\nQuem disse que é bom dividirmos a vida com alguém que tem conselho pra tudo,soluções sensatas, mas não consegue rir quando tropeça?\n\nhahahahahahahahaha!...\n\nAlguém que sabe resolver uma crise familiar, mas não tem a menor idéia de como preencher as horas livres de um fim de semana? Quanto tempo faz que você não vai ao cinema?\n\nÉ bem comum gente que fica perdida quando se acabam os problemas. E daí,o que elas farão se já não têm por que se desesperar?\n\nDesaprenderam a brincar. Eu não quero alguém assim comigo. Você quer? Espero que não.\n\nTudo que é mais difícil é mais gostoso, mas... a realidade já é dura; piora se for densa.\n\nDura, densa, e bem ruim.\n\nBrincar é legal. Entendeu?\n\nEsqueça o que te falaram sobre ser adulto, tudo aquilo de não brincar com comida, não falar besteira, não ser imaturo, não chorar, não andar descalço,não tomar chuva.\n\nPule corda!\n\nAdultos podem (e devem) contar piadas, passear no parque, rir alto e lamber a tampa do iogurte.\n\nSer adulto não é perder os prazeres da vida - e esse é o único \"não\" realmente aceitável.\n\nTeste a teoria. Uma semaninha, para começar.\n\nVeja e sinta as coisas como se elas fossem o que realmente são:\npassageiras. Acorde de manhã e decida entre duas coisas: ficar de mau humor e transmitir isso adiante ou sorrir...\n\nBom mesmo é ter problema na cabeça, sorriso na boca e paz no coração!\n\nAliás, entregue os problemas nas mãos de Deus e que tal um cafezinho gostoso agora?\n\nA vida é uma peça de teatro que não permite ensaios. Por isso cante, chore, dance e viva intensamente antes que a cortina se feche!"
    },
    {
        "author": "Vinicius de Moraes",
        "phrase": "Amai, porque nada melhor para a saúde que um amor correspondido."
    },
    {
        "author": "Desconhecido",
        "phrase": "Há pessoas que nos falam e nem as escutamos, há pessoas que nos ferem e nem cicatrizes deixam mas há pessoas que simplesmente aparecem em nossas vidas e nos marcam para sempre."
    },
    {
        "author": "Confúcio",
        "phrase": "Aja antes de falar e, portanto, fale de acordo com os seus atos."
    },
    {
        "author": "Bob Marley",
        "phrase": "Meu dia-a-dia é mais tranquilo até ao momento em que minha cabeça me leva até você. Minha cabeça me trai, o coração aperta, a atenção esvanece o frio na barriga... Com tantos sintomas a saudade até parece doença, mas sei que a cura é a sua presença..."
    },
    {
        "author": "Bob Marley",
        "phrase": "Difícil não é lutar por aquilo que se quer, e sim desistir daquilo que se mais ama.\nEu desisti. Mas não pense que foi por não ter coragem de lutar, e sim por não ter mais condições de sofrer."
    },
    {
        "author": "Augusto Branco",
        "phrase": "Vida\n\nJá perdoei erros quase imperdoáveis,\ntentei substituir pessoas insubstituíveis\ne esquecer pessoas inesquecíveis.\n\nJá fiz coisas por impulso,\njá me decepcionei com pessoas\nque eu nunca pensei que iriam me decepcionar,\nmas também já decepcionei alguém.\n\nJá abracei pra proteger,\njá dei risada quando não podia,\nfiz amigos eternos,\ne amigos que eu nunca mais vi.\n\nAmei e fui amado,\nmas também já fui rejeitado,\nfui amado e não amei.\n\nJá gritei e pulei de tanta felicidade,\njá vivi de amor e fiz juras eternas,\ne quebrei a cara muitas vezes!\n\nJá chorei ouvindo música e vendo fotos,\njá liguei só para escutar uma voz,\nme apaixonei por um sorriso,\njá pensei que fosse morrer de tanta saudade\ne tive medo de perder alguém especial (e acabei perdendo).\n\nMas vivi!\nE ainda vivo!\nNão passo pela vida.\nE você também não deveria passar!\n\nViva!\n\nBom mesmo é ir à luta com determinação,\nabraçar a vida com paixão,\nperder com classe\ne vencer com ousadia,\nporque o mundo pertence a quem se atreve\ne a vida é muito para ser insignificante."
    },
    {
        "author": "Fernando Pessoa",
        "phrase": "Amo como ama o amor. Não conheço nenhuma outra razão para amar senão amar. Que queres que te diga, além de que te amo, se o que quero dizer-te é que te amo?"
    },
    {
        "author": "William Shakespeare",
        "phrase": "Nossas dúvidas são traidoras e nos fazem perder o que, com frequência, poderíamos ganhar, por simples medo de arriscar."
    },
    {
        "author": "Desconhecido",
        "phrase": "A vida é uma peça de teatro que não permite ensaios. Por isso, cante, chore, dance, ria e viva intensamente, antes que a cortina se feche e a peça termine sem aplausos."
    },
    {
        "author": "Desconhecido",
        "phrase": "Aprendi que não posso exigir o amor de ninguém...\nPosso apenas dar boas razões para que gostem de mim...\nE ter paciência para que a vida faça o resto..."
    },
    {
        "author": "Selma Soares Albuquerque",
        "phrase": "NÃO DEIXE O AMOR PASSAR\n\nQuando encontrar alguém e esse alguém fizer seu coração parar de funcionar por alguns segundos, preste atenção: pode ser a pessoa mais importante da sua vida.\n\nSe os olhares se cruzarem e, neste momento,houver o mesmo brilho intenso entre eles, fique alerta: pode ser a pessoa que você está esperando desde o dia em que nasceu.\n\nSe o toque dos lábios for intenso, se o beijo for apaixonante, e os olhos se encherem d’água neste momento, perceba: existe algo mágico entre vocês.\n\nSe o primeiro e o último pensamento do seu dia for essa pessoa, se a vontade de ficar juntos chegar a apertar o coração, agradeça: Deus te mandou um presente: O Amor.\n\nPor isso, preste atenção nos sinais - não deixe que as loucuras do dia-a-dia o deixem cego para a melhor coisa da vida: O AMOR."
    },
    {
        "author": "Clarice Lispector",
        "phrase": "Até cortar os próprios defeitos pode ser perigoso. Nunca se sabe qual é o defeito que sustenta nosso edifício inteiro."
    },
    {
        "author": "Bob Marley",
        "phrase": "Às vezes construímos sonhos em cima de grandes pessoas... O tempo passa e descobrimos que grandes mesmo eram os sonhos e as pessoas pequenas demais para torná-los reais!"
    },
    {
        "author": "Desconhecido",
        "phrase": "NADA COMO O TEMPO\n\nCom o tempo, você vai percebendo que para ser feliz com uma outra pessoa, você precisa, em primeiro lugar, não precisar dela.\n\nPercebe também que aquele alguém que você ama (ou acha que ama) e que não quer nada com você, definitivamente não é o \"alguém\" da sua vida.\n\nVocê aprende a gostar de você, a cuidar de você e, principalmente, a gostar de quem também gosta de você.\n\nO segredo é não correr atrás das borboletas... é cuidar do jardim para que elas venham até você.\n\nNo final das contas, você vai achar não quem você estava procurando, mas quem estava procurando por você!"
    },
    {
        "author": "Clarice Lispector",
        "phrase": "Renda-se, como eu me rendi. Mergulhe no que você não conhece como eu mergulhei. Não se preocupe em entender, viver ultrapassa qualquer entendimento."
    },
    {
        "author": "Rafael Wissmann Monteiro",
        "phrase": "Os ventos que às vezes\nLevam para longe o que amamos\nSão os mesmos\nQue trazem algo mais para ser amado\n\nNós não podemos chorar pelo\nQue nos foi tirado\nNós não iremos... / Nós não iremos...\nNós amaremos o que nos foi dado\nPois tudo que é realmente nosso, não irá embora."
    },
    {
        "author": "Desconhecido",
        "phrase": "Amor não é se envolver com a pessoa perfeita, aquela dos nossos sonhos. Não existem príncipes nem princesas. Encare a outra pessoa de forma sincera e real, exaltando suas qualidades, mas sabendo também de seus defeitos. O amor só é lindo, quando encontramos alguém que nos transforme no melhor que podemos ser."
    },
    {
        "author": "Maria Julia Paes de Silva",
        "phrase": "O valor das coisas não está no tempo que elas duram, mas na intensidade com que acontecem. Por isso existem momentos inesquecíveis, coisas inexplicáveis e pessoas incomparáveis."
    },
    {
        "author": "Kim e Alison McMillen",
        "phrase": "Quando me amei de verdade, compreendi que em qualquer circunstância, eu estava no lugar certo, na hora certa, no momento exato.\nE então, pude relaxar.\nHoje sei que isso tem nome... Autoestima.\nQuando me amei de verdade, pude perceber que minha angústia, meu sofrimento emocional, não passa de um sinal de que estou indo contra minhas verdades.\nHoje sei que isso é... Autenticidade.\nQuando me amei de verdade, parei de desejar que a minha vida fosse diferente e comecei a ver que tudo o que acontece contribui para o meu crescimento.\nHoje chamo isso de... Amadurecimento.\nQuando me amei de verdade, comecei a perceber como é ofensivo tentar forçar alguma situação ou alguém apenas para realizar aquilo que desejo, mesmo sabendo que não é o momento ou a pessoa não está preparada, inclusive eu mesmo.\nHoje sei que o nome disso é... Respeito.\nQuando me amei de verdade comecei a me livrar de tudo que não fosse saudável... Pessoas, tarefas, tudo e qualquer coisa que me pusesse para baixo. De início minha razão chamou essa atitude de egoísmo.\nHoje sei que se chama... Amor-próprio.\nQuando me amei de verdade, deixei de temer o meu tempo livre e desisti de fazer grandes planos, abandonei os projetos megalômanos de futuro.\nHoje faço o que acho certo, o que gosto, quando quero e no meu próprio ritmo.\nHoje sei que isso é... Simplicidade.\nQuando me amei de verdade, desisti de querer sempre ter razão e, com isso, errei muitas menos vezes.\nHoje descobri a... Humildade.\nQuando me amei de verdade, desisti de ficar revivendo o passado e de preocupar com o futuro. Agora, me mantenho no presente, que é onde a vida acontece.\nHoje vivo um dia de cada vez. Isso é... Plenitude.\nQuando me amei de verdade, percebi que minha mente pode me atormentar e me decepcionar. Mas quando a coloco a serviço do meu coração, ela se torna uma grande e valiosa aliada.\nTudo isso é... Saber viver!"
    },
    {
        "author": "William Shakespeare",
        "phrase": "Todo mundo é capaz de dominar uma dor, exceto quem a sente."
    },
    {
        "author": "Desconhecido",
        "phrase": "Perguntei a um sábio,\na diferença que havia\nentre amor e amizade,\nele me disse essa verdade...\nO Amor é mais sensível,\na Amizade mais segura.\nO Amor nos dá asas,\na Amizade o chão.\nNo Amor há mais carinho,\nna Amizade compreensão.\nO Amor é plantado\ne com carinho cultivado,\na Amizade vem faceira,\ne com troca de alegria e tristeza,\ntorna-se uma grande e querida\ncompanheira.\nMas quando o Amor é sincero\nele vem com um grande amigo,\ne quando a Amizade é concreta,\nela é cheia de amor e carinho.\nQuando se tem um amigo\nou uma grande paixão,\nambos sentimentos coexistem\ndentro do seu coração."
    },
    {
        "author": "Sean Morey",
        "phrase": "Ciclo da Vida\n\nA coisa mais injusta sobre a vida é a maneira como ela termina. Eu acho que o verdadeiro ciclo da vida está todo de trás pra frente. Nós deveríamos morrer primeiro, nos livrar logo disso.\n\nDaí viver num asilo, até ser chutado pra fora de lá por estar muito novo. Ganhar um relógio de ouro e ir trabalhar. Então você trabalha 40 anos até ficar novo o bastante pra poder aproveitar sua aposentadoria. Aí você curte tudo, bebe bastante álcool, faz festas e se prepara para a faculdade.\n\nVocê vai para colégio, tem várias namoradas, vira criança, não tem nenhuma responsabilidade, se torna um bebezinho de colo, volta pro útero da mãe, passa seus últimos nove meses de vida flutuando. E termina tudo com um ótimo org*sm*! Não seria perfeito?"
    },
    {
        "author": "Friedrich Nietzsche",
        "phrase": "A vantagem de ter péssima memória é divertir-se muitas vezes com as mesmas coisas boas como se fosse a primeira vez."
    },
    {
        "author": "Adriana Britto",
        "phrase": "Certezas\n\nNão quero alguém que morra de amor por mim...\n\nSó preciso de alguém que viva por mim, que queira estar junto de mim, me abraçando.\n\nNão exijo que esse alguém me ame como eu o amo, quero apenas que me ame, não me importando com que intensidade.\nNão tenho a pretensão de que todas as pessoas que gosto, gostem de mim...\n\nNem que eu faça a falta que elas me fazem, o importante pra mim é saber que eu, em algum momento, fui insubstituível...\nE que esse momento será inesquecível...\n\nSó quero que meu sentimento seja valorizado.\nQuero sempre poder ter um sorriso estampando em meu rosto, mesmo quando a situação não for muito alegre...\nE que esse meu sorriso consiga transmitir paz para os que estiverem ao meu redor.\n\nQuero poder fechar meus olhos e imaginar alguém... e poder ter a absoluta certeza de que esse alguém também pensa em mim quando fecha os olhos, que faço falta quando não estou por perto.\n\nQueria ter a certeza de que apesar de minhas renúncias e loucuras, alguém me valoriza pelo que sou, não pelo que tenho...\n\nQue me veja como um ser humano completo, que abusa demais dos bons sentimentos que a vida lhe proporciona, que dê valor ao que realmente importa, que é meu sentimento... e não brinque com ele.\n\nE que esse alguém me peça para que eu nunca mude, para que eu nunca cresça, para que eu seja sempre eu mesmo.\n\nNão quero brigar com o mundo, mas se um dia isso acontecer, quero ter forças suficientes para mostrar a ele que o amor existe...\n\nQue ele é superior ao ódio e ao rancor, e que não existe vitória sem humildade e paz.\nQuero poder acreditar que mesmo se hoje eu fracassar, amanhã será outro dia, e se eu não desistir dos meus sonhos e propósitos, talvez obterei êxito e serei plenamente feliz.\n\nQue eu nunca deixe minha esperança ser abalada por palavras pessimistas...\nQue a esperança nunca me pareça um NÃO que a gente teima em maquiá-lo de verde e entendê-lo como SIM.\n\nQuero poder ter a liberdade de dizer o que sinto a uma pessoa, de poder dizer a alguém o quanto ele é especial e importante pra mim, sem ter de me preocupar com terceiros... Sem correr o risco de ferir uma ou mais pessoas com esse sentimento.\n\nQuero, um dia, poder dizer às pessoas que nada foi em vão...\n\nQue o amor existe, que vale a pena se doar às amizades a às pessoas, que a vida é bela sim, e que eu sempre dei o melhor de mim... e que valeu a pena."
    },
    {
        "author": "Bob Marley",
        "phrase": "Não viva para que a sua presença seja notada, mas para que a sua falta seja sentida."
    },
    {
        "author": "Desconhecido",
        "phrase": "Um dia descobrimos que beijar uma pessoa para esquecer outra é bobagem.\nVocê não só não esquece a outra pessoa como pensa muito mais nela...\nUm dia nós percebemos que as mulheres têm instinto \"caçador\" e fazem qualquer homem sofrer ...\nUm dia descobrimos que se apaixonar é inevitável...\nUm dia percebemos que as melhores provas de amor são as mais simples...\nUm dia percebemos que o comum não nos atrai...\nUm dia saberemos que ser classificado como \"bonzinho\" não é bom...\nUm dia perceberemos que a pessoa que nunca te liga é a que mais pensa em você...\nUm dia percebemos que somos muito importante para alguém, mas não damos valor a isso...\nUm dia percebemos como aquele amigo faz falta, mas ai já é tarde demais...\nEnfim...\nUm dia descobrimos que apesar de viver quase um século esse tempo todo não é suficiente para realizarmos todos os nossos sonhos, para beijarmos todas as bocas que nos atraem, para dizer o que tem de ser dito...\nO jeito é: ou nos conformamos com a falta de algumas coisas na nossa vida ou lutamos para realizar todas as nossas loucuras..."
    },
    {
        "author": "Henry Van Dyke",
        "phrase": "O tempo é muito lento para os que esperam\nMuito rápido para os que têm medo\nMuito longo para os que lamentam\nMuito curto para os que festejam\nMas, para os que amam, o tempo é eterno."
    },
    {
        "author": "William Shakespeare",
        "phrase": "Choramos ao nascer porque chegamos a este imenso cenário de dementes."
    },
    {
        "author": "Desconhecido",
        "phrase": "Já escondi um amor com medo de perdê-lo, já perdi um amor por escondê-lo.\nJá segurei nas mãos de alguém por medo, já tive tanto medo, ao ponto de nem sentir minhas mãos.\nJá expulsei pessoas que amava de minha vida, já me arrependi por isso.\nJá passei noites chorando até pegar no sono, já fui dormir tão feliz, ao ponto de nem conseguir fechar os olhos.\nJá acreditei em amores perfeitos, já descobri que eles não existem.\nJá amei pessoas que me decepcionaram, já decepcionei pessoas que me amaram.\nJá passei horas na frente do espelho tentando descobrir quem sou, já tive tanta certeza de mim, ao ponto de querer sumir.\nJá menti e me arrependi depois, já falei a verdade e também me arrependi.\nJá fingi não dar importância às pessoas que amava, para mais tarde chorar quieta em meu canto.\nJá sorri chorando lágrimas de tristeza, já chorei de tanto rir.\nJá acreditei em pessoas que não valiam a pena, já deixei de acreditar nas que realmente valiam.\nJá tive crises de riso quando não podia.\nJá quebrei pratos, copos e vasos, de raiva.\nJá senti muita falta de alguém, mas nunca lhe disse.\nJá gritei quando deveria calar, já calei quando deveria gritar.\nMuitas vezes deixei de falar o que penso para agradar uns, outras vezes falei o que não pensava para magoar outros.\nJá fingi ser o que não sou para agradar uns, já fingi ser o que não sou para desagradar outros.\nJá contei piadas e mais piadas sem graça, apenas para ver um amigo feliz.\nJá inventei histórias com final feliz para dar esperança a quem precisava.\nJá sonhei demais, ao ponto de confundir com a realidade... Já tive medo do escuro, hoje no escuro \"me acho, me agacho, fico ali\".\nJá cai inúmeras vezes achando que não iria me reerguer, já me reergui inúmeras vezes achando que não cairia mais.\nJá liguei para quem não queria apenas para não ligar para quem realmente queria.\nJá corri atrás de um carro, por ele levar embora, quem eu amava.\nJá chamei pela mamãe no meio da noite fugindo de um pesadelo. Mas ela não apareceu e foi um pesadelo maior ainda.\nJá chamei pessoas próximas de \"amigo\" e descobri que não eram... Algumas pessoas nunca precisei chamar de nada e sempre foram e serão especiais para mim.\nNão me dêem fórmulas certas, porque eu não espero acertar sempre.\nNão me mostre o que esperam de mim, porque vou seguir meu coração!\nNão me façam ser o que não sou, não me convidem a ser igual, porque sinceramente sou diferente!\nNão sei amar pela metade, não sei viver de mentiras, não sei voar com os pés no chão.\nSou sempre eu mesma, mas com certeza não serei a mesma pra sempre!\nGosto dos venenos mais lentos, das bebidas mais amargas, das drogas mais poderosas, das idéias mais insanas, dos pensamentos mais complexos, dos sentimentos mais fortes.\nTenho um apetite voraz e os delírios mais loucos.\nVocê pode até me empurrar de um penhasco q eu vou dizer:\n- E daí? EU ADORO VOAR!"
    },
    {
        "author": "Clarice Lispector",
        "phrase": "É curioso como não sei dizer quem sou. Quer dizer, sei-o bem, mas não posso dizer. Sobretudo tenho medo de dizer, porque no momento em que tento falar não só não exprimo o que sinto como o que sinto se transforma lentamente no que eu digo."
    },
    {
        "author": "Joseph Addison",
        "phrase": "A amizade desenvolve a felicidade e reduz o sofrimento, duplicando a nossa alegria e dividindo a nossa dor."
    },
    {
        "author": "Carlos Drummond de Andrade",
        "phrase": "As sem-razões do amor\n\nEu te amo porque te amo,\nNão precisas ser amante,\ne nem sempre sabes sê-lo.\nEu te amo porque te amo.\nAmor é estado de graça\ne com amor não se paga.\n\nAmor é dado de graça,\né semeado no vento,\nna cachoeira, no eclipse.\nAmor foge a dicionários\ne a regulamentos vários.\n\nEu te amo porque não amo\nbastante ou demais a mim.\nPorque amor não se troca,\nnão se conjuga nem se ama.\nPorque amor é amor a nada,\nfeliz e forte em si mesmo.\n\nAmor é primo da morte,\ne da morte vencedor,\npor mais que o matem (e matam)\na cada instante de amor."
    },
    {
        "author": "Desconhecido",
        "phrase": "Há certas horas, em que não precisamos de um amor...\nNão precisamos da paixão desmedida...\nNão queremos beijo na boca...\nE nem corpos a se encontrar na maciez de uma cama...\n\nHá certas horas, que só queremos a mão no ombro, o abraço apertado ou mesmo o estar ali, quietinho, ao lado...\nSem nada dizer...\n\nHá certas horas, quando sentimos que estamos pra chorar, que desejamos uma presença amiga, a nos ouvir paciente, a brincar com a gente, a nos fazer sorrir...\n\nAlguém que ria de nossas piadas sem graça...\nQue ache nossas tristezas as maiores do mundo...\nQue nos teça elogios sem fim...\nE que apesar de todas essas mentiras úteis, nos seja de uma sinceridade\ninquestionável...\n\nQue nos mande calar a boca ou nos evite um gesto impensado...\nAlguém que nos possa dizer:\n\nAcho que você está errado, mas estou do seu lado...\n\nOu alguém que apenas diga:\n\nSou seu amor! E estou aqui!"
    },
    {
        "author": "Machado de Assis",
        "phrase": "Cada qual sabe amar a seu modo; o modo, pouco importa; o essencial é que saiba amar."
    },
    {
        "author": "Clarice Lispector",
        "phrase": "E se me achar esquisita,\nrespeite também.\naté eu fui obrigada a me respeitar."
    },
    {
        "author": "Carlos Drummond de Andrade",
        "phrase": "Perder tempo em aprender coisas que não interessam, priva-nos de descobrir coisas interessantes."
    },
    {
        "author": "Desconhecido",
        "phrase": "Loucos e Santos\n\nEscolho meus amigos não pela pele ou outro arquétipo qualquer, mas pela pupila.\nTem que ter brilho questionador e tonalidade inquietante.\nA mim não interessam os bons de espírito nem os maus de hábitos.\nFico com aqueles que fazem de mim louco e santo.\nDeles não quero resposta, quero meu avesso.\nQue me tragam dúvidas e angústias e agüentem o que há de pior em mim.\nPara isso, só sendo louco.\nQuero os santos, para que não duvidem das diferenças e peçam perdão pelas injustiças.\nEscolho meus amigos pela alma lavada e pela cara exposta.\nNão quero só o ombro e o colo, quero também sua maior alegria.\nAmigo que não ri junto, não sabe sofrer junto.\nMeus amigos são todos assim: metade bobeira, metade seriedade.\nNão quero risos previsíveis, nem choros piedosos.\nQuero amigos sérios, daqueles que fazem da realidade sua fonte de aprendizagem, mas lutam para que a fantasia não desapareça.\nNão quero amigos adultos nem chatos.\nQuero-os metade infância e outra metade velhice!\nCrianças, para que não esqueçam o valor do vento no rosto; e velhos, para que nunca tenham pressa.\nTenho amigos para saber quem eu sou.\nPois os vendo loucos e santos, bobos e sérios, crianças e velhos, nunca me esquecerei de que normalidade é uma ilusão imbecil e estéril."
    },
    {
        "author": "Roger Bussy-Rabutin",
        "phrase": "A distância faz ao amor aquilo que o vento faz ao fogo: apaga o pequeno, inflama o grande."
    },
    {
        "author": "Desconhecido",
        "phrase": "Reverência ao destino\n\nFalar é completamente fácil, quando se tem palavras em mente que expressem sua opinião.\nDifícil é expressar por gestos e atitudes o que realmente queremos dizer, o quanto queremos dizer, antes que a pessoa se vá.\n\nFácil é julgar pessoas que estão sendo expostas pelas circunstâncias.\nDifícil é encontrar e refletir sobre os seus erros, ou tentar fazer diferente algo que já fez muito errado.\n\nFácil é ser colega, fazer companhia a alguém, dizer o que ele deseja ouvir.\nDifícil é ser amigo para todas as horas e dizer sempre a verdade quando for preciso.\nE com confiança no que diz.\n\nFácil é analisar a situação alheia e poder aconselhar sobre esta situação.\nDifícil é vivenciar esta situação e saber o que fazer ou ter coragem pra fazer.\n\nFácil é demonstrar raiva e impaciência quando algo o deixa irritado.\nDifícil é expressar o seu amor a alguém que realmente te conhece, te respeita e te entende.\nE é assim que perdemos pessoas especiais.\n\nFácil é mentir aos quatro ventos o que tentamos camuflar.\nDifícil é mentir para o nosso coração.\n\nFácil é ver o que queremos enxergar.\nDifícil é saber que nos iludimos com o que achávamos ter visto.\nAdmitir que nos deixamos levar, mais uma vez, isso é difícil.\n\nFácil é dizer \"oi\" ou \"como vai?\"\nDifícil é dizer \"adeus\", principalmente quando somos culpados pela partida de alguém de nossas vidas...\n\nFácil é abraçar, apertar as mãos, beijar de olhos fechados.\nDifícil é sentir a energia que é transmitida.\nAquela que toma conta do corpo como uma corrente elétrica quando tocamos a pessoa certa.\n\nFácil é querer ser amado.\nDifícil é amar completamente só.\nAmar de verdade, sem ter medo de viver, sem ter medo do depois. Amar e se entregar, e aprender a dar valor somente a quem te ama.\n\nFácil é ouvir a música que toca.\nDifícil é ouvir a sua consciência, acenando o tempo todo, mostrando nossas escolhas erradas.\n\nFácil é ditar regras.\nDifícil é segui-las.\nTer a noção exata de nossas próprias vidas, ao invés de ter noção das vidas dos outros.\n\nFácil é perguntar o que deseja saber.\nDifícil é estar preparado para escutar esta resposta ou querer entender a resposta.\n\nFácil é chorar ou sorrir quando der vontade.\nDifícil é sorrir com vontade de chorar ou chorar de rir, de alegria.\n\nFácil é dar um beijo.\nDifícil é entregar a alma, sinceramente, por inteiro.\n\nFácil é sair com várias pessoas ao longo da vida.\nDifícil é entender que pouquíssimas delas vão te aceitar como você é e te fazer feliz por inteiro.\n\nFácil é ocupar um lugar na caderneta telefônica.\nDifícil é ocupar o coração de alguém, saber que se é realmente amado.\n\nFácil é sonhar todas as noites.\nDifícil é lutar por um sonho."
    },
    {
        "author": "Oscar Wilde",
        "phrase": "A cada bela impressão que causamos, conquistamos um inimigo. Para ser popular é indispensável ser medíocre."
    },
    {
        "author": "Albert Einstein",
        "phrase": "Triste época! É mais fácil desintegrar um átomo do que um preconceito."
    },
    {
        "author": "Evelyn Beatrice Hall",
        "phrase": "Posso não concordar com nenhuma das palavras que você disser, mas defenderei até a morte o direito de você dizê-las."
    },
    {
        "author": "Charles Chaplin",
        "phrase": "Pensamos demasiadamente e sentimos muito pouco. Necessitamos mais de humildade que de máquinas. Mais de bondade e ternura que de inteligência. Sem isso, a vida se tornará violenta e tudo se perderá."
    },
    {
        "author": "William Shakespeare",
        "phrase": "A paixão aumenta em função dos obstáculos que se lhe opõem."
    },
    {
        "author": "Geraldo Eustáquio de Souza",
        "phrase": "A Idade de Ser Feliz\n\nExiste somente uma idade para a gente ser feliz\nsomente uma época na vida de cada pessoa\nem que é possível sonhar e fazer planos\ne ter energia bastante para realizá-los\na despeito de todas as dificuldades e obstáculos\n\nUma só idade para a gente se encantar com a vida\ne viver apaixonadamente\ne desfrutar tudo com toda intensidade\nsem medo nem culpa de sentir prazer\n\nFase dourada em que a gente pode criar e recriar a vida\nà nossa própria imagem e semelhança\ne sorrir e cantar e brincar e dançar\ne vestir-se com todas as cores\ne entregar-se a todos os amores\nexperimentando a vida em todos os seus sabores\nsem preconceito ou pudor\n\nTempo de entusiasmo e de coragem\nem que todo desafio é mais um convite à luta\nque a gente enfrenta com toda a disposição de tentar algo novo,\nde novo e de novo, e quantas vezes for preciso\n\nEssa idade, tão fugaz na vida da gente,\nchama-se presente,\ne tem apenas a duração do instante que passa ...\n... doce pássaro do aqui e agora\nque quando se dá por ele já partiu para nunca mais!"
    },
    {
        "author": "Clarice Lispector",
        "phrase": "Não tenho tempo pra mais nada, ser feliz me consome muito."
    },
    {
        "author": "Mario Quintana",
        "phrase": "DO AMOROSO ESQUECIMENTO\n\nEu, agora - que desfecho!\nJá nem penso mais em ti...\nMas será que nunca deixo\nDe lembrar que te esqueci?"
    },
    {
        "author": "Confúcio",
        "phrase": "Escolhe um trabalho de que gostes e não terás que trabalhar nem um dia na tua vida."
    },
    {
        "author": "Paulo Coelho",
        "phrase": "Não existe nada de completamente errado no mundo, mesmo um relógio parado consegue estar certo duas vezes por dia."
    },
    {
        "author": "Georges Bernanos",
        "phrase": "Saber encontrar a alegria na alegria dos outros, é o segredo da felicidade."
    },
    {
        "author": "Toquinho e Mutinho",
        "phrase": "Se o amor é fantasia, eu me encontro ultimamente em pleno carnaval."
    },
    {
        "author": "Friedrich Nietzsche",
        "phrase": "Há sempre alguma loucura no amor. Mas há sempre um pouco de razão na loucura."
    },
    {
        "author": "Albert Einstein",
        "phrase": "Não tentes ser bem-sucedido, tenta antes ser um homem de valor."
    },
    {
        "author": "Albert Einstein",
        "phrase": "Se um dia tiver que escolher entre o mundo e o amor lembre-se: se escolher o mundo ficará sem o amor, mas se escolher o amor com ele você conquistará o mundo."
    },
    {
        "author": "Clarice Lispector",
        "phrase": "ISSO É MUITA SABEDORIA\n\nQuando fazemos tudo para que nos amem e não conseguimos, resta-nos um último recurso: não fazer mais nada. Por isso, digo, quando não obtivermos o amor, o afeto ou a ternura que havíamos solicitado, melhor será desistirmos e procurar mais adiante os sentimentos que nos negaram. Não fazer esforços inúteis, pois o amor nasce, ou não, espontaneamente, mas nunca por força de imposição. Às vezes, é inútil esforçar-se demais, nada se consegue; outras vezes, nada damos e o amor se rende aos nossos pés. Os sentimentos são sempre uma surpresa. Nunca foram uma caridade mendigada, uma compaixão ou um favor concedido. Quase sempre amamos a quem nos ama mal, e desprezamos quem melhor nos quer. Assim, repito, quando tivermos feito tudo para conseguir um amor, e falhado, resta-nos um só caminho... o de mais nada fazer."
    },
    {
        "author": "Sarah Westphal",
        "phrase": "Desconfie do destino e acredite em você. Gaste mais horas realizando que sonhando, fazendo que planejando, vivendo que esperando porque, embora quem quase morre esteja vivo, quem quase vive já morreu."
    },
    {
        "author": "Clarice Lispector",
        "phrase": "Que minha solidão me sirva de companhia.\nque eu tenha a coragem de me enfrentar.\nque eu saiba ficar com o nada\ne mesmo assim me sentir\ncomo se estivesse plena de tudo."
    },
    {
        "author": "Martha Medeiros",
        "phrase": "Eureka!\n\nCada semana, uma novidade. A última foi que pizza previne câncer do esôfago. Acho a maior graça. Tomate previne isso, cebola previne aquilo, chocolate faz bem, chocolate faz mal, um cálice diário de vinho não tem problema, qualquer gole de álcool é nocivo, tome água em abundância, mas não exagere... Diante dessa profusão de descobertas, acho mais seguro não mudar de hábitos. Sei direitinho o que faz bem e o que faz mal pra minha saúde.\n\nPrazer faz muito bem. Dormir me deixa 0km. Ler um bom livro faz eu me sentir nova em folha. Viajar me deixa tensa antes de embarcar, mas depois eu rejuvenesço uns 5 anos. Vôos aéreos não me incham as pernas, me incham o cérebro, volto cheia de idéias.\n\nBrigar me provoca arritmia cardíaca. Ver pessoas tendo acessos de estupidez me embrulha o estômago.Testemunhar gente jogando lata de cerveja pela janela do carro me faz perder toda a fé no ser humano. E telejornais os médicos deveriam proibir - como doem!\n\nEssa história de que sexo faz bem pra pele acho que é conversa, mas mal tenho certeza de que não faz, então, pode-se abusar. Caminhar faz bem, dançar faz bem, ficar em silêncio quando uma discussão está pegando fogo faz muito bem: você exercita o autocontrole e ainda acorda no outro dia sem se sentir arrependido de nada.\n\nAcordar de manhã arrependido do que disse ou do que fez ontem à noite é prejudicial à saúde. E passar o resto do dia sem coragem para pedir desculpas, pior ainda. Não pedir perdão pelas nossas mancadas dá câncer, não há tomate ou mozzarella que previnam.\n\nIr ao cinema, conseguir um lugar central nas fileiras do fundo, não ter ninguém atrapalhando sua visão, nenhum celular tocando e o filme ser excepcionalmente bom, uau! Cinema é melhor pra saúde do que pipoca. Conversa é melhor do que piada. Beijar é melhor do que fumar. Exercício é melhor do que cirurgia. Humor é melhor do que rancor. Amigos são melhores do que gente influente. Economia é melhor do que dívida. Pergunta é melhor do que dúvida.\n\nTomo pouca água, bebo mais de um cálice de vinho por dia, faz dois meses que não piso na academia, mas tenho dormido bem, trabalhado bastante, encontrado meus amigos, ido ao cinema e confiado que tudo isso pode me levar a uma idade avançada. Sonhar é melhor do que nada."
    },
    {
        "author": "Arnaldo Jabor",
        "phrase": "Quem não dá assistência, abre concorrência\n\nVocê homem da atualidade, vem se surpreendendo diuturnamente com o \"nível\" intelectual, cultural e, principalmente, \"liberal\" de sua mulher, namorada e etc.\n\nÀs vezes sequer sabe como agir, e lá no fundinho tem aquele medo de ser traído - ou nos termos usuais: \"corneado\". Saiba de uma coisa... esse risco é iminente, a probabilidade disso acontecer é muito grande, e só cabe a você, e a ninguém mais evitar que isso aconteça ou, então, assumir seu \"chifre\" em alto e bom som.\n\nVocê deve estar perguntando porque eu gastaria meu precioso tempo falando sobre isso. Entretanto, a aflição masculina diante da traição vem me chamando a atenção já há tempos.\n\nMas o que seria uma \"mulher moderna\"?\n\nA princípio seria aquela que se ama acima de tudo, que não perde (e nem tem) tempo com/para futilidades, é aquela que trabalha porque acha que o trabalho engrandece, que é independente sentimentalmente dos outros, que é corajosa, companheira, confidente, amante...\n\nÉ aquela que às vezes tem uma crise súbita de ciúmes mas que não tem vergonha nenhuma em admitir que está errada e correr pros seus braços...\n\nÉ aquela que consegue ao mesmo tempo ser forte e meiga, desarrumada e linda...\n\nEnfim, a mulher moderna é aquela que não tem medo de nada nem de ninguém, olha a vida de frente, fala o que pensa e o que sente, doa a quem doer...\n\nAssim, após um processo \"investigatório\" junto a essas \"mulheres modernas\" pude constatar o pior:\n\nVOCÊ SERÁ (OU É???) \"corno\", a menos que:\n\n- Nunca deixe uma \"mulher moderna\" insegura. Antigamente elas choravam. Hoje, elas simplesmente traem, sem dó nem piedade.\n\n- Não ache que ela tem poderes \"adivinhatórios\". Ela tem de saber - da sua boca - o quanto você gosta dela. Qualquer dúvida neste sentido poderá levar às conseqüências expostas acima.\n\n- Não ache que é normal sair com os amigos (seja pra beber, pra jogar futebol...) mais do que duas vezes por semana, três vezes então é assinar atestado de \"chifrudo\". As \"mulheres modernas\" dificilmente andam implicando com isso, entretanto elas são categoricamente \"cheias de amor pra dar\" e precisam da \"presença masculina\". Se não for a sua meu amigo... bem...\n\n- Quando disser que vai ligar, ligue, senão o risco dela ligar pra aquele ex bom de cama é grandessíssimo.\n\n- Satisfaça-a sexualmente. Mas não finja satisfazê-la. As \"mulheres modernas\" têm um pique absurdo com relação ao sexo e, principalmente dos 20 aos 38 anos, elas pensam em - e querem - fazer sexo todos os dias (pasmem, mas é a pura verdade)...bom, nem precisa dizer que se não for com você...\n\n- Lhe dê atenção. Mas principalmente faça com que ela perceba isso. Garanhões mau (ou bem) intencionados sempre existem, e estes quando querem são peritos em levar uma mulher às nuvens. Então, leve-a você, afinal, ela é sua ou não é????\n\nNem pense em provocar \"ciuminhos\" vãos. Como pude constatar, mulher insegura é uma máquina colocadora de chifres.\n\n- Em hipótese alguma deixe-a desconfiar do fato de você estar saindo com outra. Essa mera suposição da parte delas dá ensejo ao um \"chifre\" tão estrondoso que quando você acordar, meu amigo, já existirá alguém MUITO MAIS \"comedor\" do que você...só que o prato principal, bem...dessa vez é a SUA mulher.\n\nSabe aquele bonitão que, você sabe, sairia com a sua mulher a qualquer hora. Bem... de repente a recíproca também pode ser verdadeira. Basta ela, só por um segundo, achar que você merece...Quando você reparar... já foi.\n\n- Tente estar menos \"cansado\". A \"mulher moderna\" também trabalhou o dia inteiro e, provavelmente, ainda tem fôlego para - como diziam os homens de antigamente - \"dar uma\", para depois, virar pro lado e simplesmente dormir.\n\n- Volte a fazer coisas do começo da relação. Se quando começaram a sair viviam se cruzando em \"baladas\", \"se pegando\" em lugares inusitados, trocavam e-mails ou telefonemas picantes, a chance dela gostar disso é muito grande, e a de sentir falta disso então é imensa. A \"mulher moderna\" não pode sentir falta dessas coisas...senão...\n\nBem amigos, aplica-se, finalmente, o tão famoso jargão \"quem não dá assistência, abre concorrência\".\n\nDeste modo, se você está ao lado de uma mulher de quem realmente gosta e tem plena consciência de que, atualmente o mercado não está pra peixe (falemos de qualidade), pense bem antes de dar alguma dessas \"mancadas\"... proteja-a, ame-a, e, principalmente, faça-a saber disso.\n\nEla vai pensar milhões de vezes antes de dar bola pra aquele \"bonitão\" que vive enchendo-a de olhares... e vai continuar, sem dúvidas, olhando só pra você!"
    },
    {
        "author": "William Shakespeare",
        "phrase": "Sofremos muito com o pouco que nos falta e gozamos pouco o muito que temos."
    },
    {
        "author": "Carlos Drummond de Andrade",
        "phrase": "Os homens distinguem-se pelo que fazem; as mulheres, pelo que levam os homens a fazer."
    },
    {
        "author": "Garth Henrichs",
        "phrase": "A gente não faz amigos, reconhece-os."
    },
    {
        "author": "Sarah Westphal",
        "phrase": "Quase\n\nAinda pior que a convicção do não e a incerteza do talvez é a desilusão de um quase. É o quase que me incomoda, que me entristece, que me mata trazendo tudo que poderia ter sido e não foi. Quem quase ganhou ainda joga, quem quase passou ainda estuda, quem quase morreu está vivo, quem quase amou não amou. Basta pensar nas oportunidades que escaparam pelos dedos, nas chances que se perdem por medo, nas ideias que nunca sairão do papel por essa maldita mania de viver no outono.\n\nPergunto-me, às vezes, o que nos leva a escolher uma vida morna; ou melhor não me pergunto, contesto. A resposta eu sei de cor, está estampada na distância e frieza dos sorrisos, na frouxidão dos abraços, na indiferença dos \"Bom dia\", quase que sussurrados. Sobra covardia e falta coragem até pra ser feliz. A paixão queima, o amor enlouquece, o desejo trai. Talvez esses fossem bons motivos para decidir entre a alegria e a dor, sentir o nada, mas não são. Se a virtude estivesse mesmo no meio termo, o mar não teria ondas, os dias seriam nublados e o arco-íris em tons de cinza. O nada não ilumina, não inspira, não aflige nem acalma, apenas amplia o vazio que cada um traz dentro de si.\n\nNão é que fé mova montanhas, nem que todas as estrelas estejam ao alcance, para as coisas que não podem ser mudadas resta-nos somente paciência porém,preferir a derrota prévia à dúvida da vitória é desperdiçar a oportunidade de merecer. Pros erros há perdão; pros fracassos, chance; pros amores impossíveis, tempo. De nada adianta cercar um coração vazio ou economizar alma. Um romance cujo fim é instantâneo ou indolor não é romance. Não deixe que a saudade sufoque, que a rotina acomode, que o medo impeça de tentar. Desconfie do destino e acredite em você. Gaste mais horas realizando que sonhando, fazendo que planejando, vivendo que esperando porque, embora quem quase morre esteja vivo, quem quase vive já morreu."
    },
    {
        "author": "Pablo Neruda",
        "phrase": "Quero apenas cinco coisas...\nPrimeiro é o amor sem fim\nA segunda é ver o outono\nA terceira é o grave inverno\nEm quarto lugar o verão\nA quinta coisa são teus olhos\nNão quero dormir sem teus olhos.\nNão quero ser... sem que me olhes.\nAbro mão da primavera para que continues me olhando."
    },
    {
        "author": "William Shakespeare",
        "phrase": "A alegria evita mil males e prolonga a vida."
    },
    {
        "author": "Jim Brown",
        "phrase": "Os homens perdem a saúde para juntar dinheiro, depois perdem o dinheiro para recuperar a saúde. E por pensarem ansiosamente no futuro esquecem do presente de forma que acabam por não viver nem no presente nem no futuro. E vivem como se nunca fossem morrer... e morrem como se nunca tivessem vivido."
    },
    {
        "author": "Pitágoras",
        "phrase": "Eduquem as crianças, para que não seja necessário punir os adultos."
    },
    {
        "author": "Rubem Alves",
        "phrase": "A saudade é a nossa alma dizendo para onde ela quer voltar."
    },
    {
        "author": "Vinícius de Moraes e Toquinho",
        "phrase": "Como dizia o poeta\n\nQuem já passou\nPor esta vida e não viveu\nPode ser mais, mas sabe menos do que eu\nPorque a vida só se dá\nPra quem se deu\nPra quem amou, pra quem chorou\nPra quem sofreu, ai\n\nQuem nunca curtiu uma paixão\nNunca vai ter nada, não\n\nNão há mal pior\nDo que a descrença\nMesmo o amor que não compensa\nÉ melhor que a solidão\n\nAbre os teus braços, meu irmão, deixa cair\nPra que somar se a gente pode dividir?\nEu francamente já não quero nem saber\nDe quem não vai porque tem medo de sofrer\n\nAi de quem não rasga o coração\nEsse não vai ter perdão"
    },
    {
        "author": "Desconhecido",
        "phrase": "A tradição é a personalidade dos imbecis."
    },
    {
        "author": "Desconhecido",
        "phrase": "Se você quiser muito, muito mesmo, algo, deixe ir. Se voltar para você é porque é seu para sempre. Se não voltar, é porque nunca foi seu."
    },
    {
        "author": "Bob Marley",
        "phrase": "Sou louco porque vivo em um mundo que não merece minha lucidez."
    },
    {
        "author": "Desconhecido",
        "phrase": "DESEJOS\n\nDesejo a vocês...\nFruto do mato\nCheiro de jardim\nNamoro no portão\nDomingo sem chuva\nSegunda sem mau humor\nSábado com seu amor\nFilme do Carlitos\nChope com amigos\nCrônica de Rubem Braga\nViver sem inimigos\nFilme antigo na TV\nTer uma pessoa especial\nE que ela goste de você\nMúsica de Tom com letra de Chico\nFrango caipira em pensão do interior\nOuvir uma palavra amável\nTer uma surpresa agradável\nVer a Banda passar\nNoite de lua cheia\nRever uma velha amizade\nTer fé em Deus\nNão ter que ouvir a palavra não\nNem nunca, nem jamais e adeus.\nRir como criança\nOuvir canto de passarinho.\nSarar de resfriado\nEscrever um poema de Amor\nQue nunca será rasgado\nFormar um par ideal\nTomar banho de cachoeira\nPegar um bronzeado legal\nAprender um nova canção\nEsperar alguém na estação\nQueijo com goiabada\nPôr-do-Sol na roça\nUma festa\nUm violão\nUma seresta\nRecordar um amor antigo\nTer um ombro sempre amigo\nBater palmas de alegria\nUma tarde amena\nCalçar um velho chinelo\nSentar numa velha poltrona\nTocar violão para alguém\nOuvir a chuva no telhado\nVinho branco\nBolero de Ravel\nE muito carinho meu."
    },
    {
        "author": "Bob Marley",
        "phrase": "Eu gosto do impossível, tenho medo do provável, dou risada do ridículo e choro porque tenho vontade, mas nem sempre tenho motivo.\nTenho um sorriso confiante que às vezes não demonstra o tanto de insegurança por trás dele.\nSou inconstante e talvez imprevisível.\nNão gosto de rotina. Eu amo de verdade aqueles para quem eu digo isso e me irrito de forma inexplicável quando não botam fé nas minhas palavras.\nNem sempre coloco em prática aquilo que eu julgo certo.\nSão poucas as pessoas para quem eu me explico..."
    },
    {
        "author": "Sócrates",
        "phrase": "Sábio é aquele que conhece os limites da própria ignorância."
    },
    {
        "author": "Fernando Pessoa",
        "phrase": "O amor, quando se revela,\nNão se sabe revelar.\nSabe bem olhar p'ra ela,\nMas não lhe sabe falar.\n\nQuem quer dizer o que sente\nNão sabe o que há de dizer.\nFala: parece que mente...\nCala: parece esquecer...\n\nAh, mas se ela adivinhasse,\nSe pudesse ouvir o olhar,\nE se um olhar lhe bastasse\nP'ra saber que a estão a amar!\n\nMas quem sente muito, cala;\nQuem quer dizer quanto sente\nFica sem alma nem fala,\nFica só, inteiramente!\n\nMas se isto puder contar-lhe\nO que não lhe ouso contar,\nJá não terei que falar-lhe\nPorque lhe estou a falar..."
    },
    {
        "author": "Oscar Wilde",
        "phrase": "A vida é muito importante para ser levada a sério."
    },
    {
        "author": "Platão",
        "phrase": "Podemos facilmente perdoar uma criança que tem medo do escuro; a real tragédia da vida é quando os homens têm medo da luz."
    },
    {
        "author": "H. Jackson Brown Jr",
        "phrase": "Instruções para a vida:\n\n1. Dê mais às pessoas do que elas esperam e faça com alegria.\n2. Decore o seu poema favorito.\n3. Não acredite em tudo que você ouve, não gaste tudo o que você tem e durma tanto quanto você queira.\n4. Quando disser \"Eu te amo\" seja verdadeiro.\n5. Quando disser \"Sinto muito\", olhe para a pessoa nos olhos.\n6. Fique noivo pelo menos seis meses antes de se casar.\n7. Acredite em amor à primeira vista.\n8. Nunca ria dos sonhos de outra pessoa.\n9. Ame profundamente e com paixão. Você pode se machucar, mas é a única forma de viver a vida completamente.\n10. Em desentendimentos, brigue de forma justa. Não use palavrões.\n11. Não julgue pessoas pelos seus parentes.\n12. Fale devagar, mas pense com rapidez.\n13. Quando alguém perguntar algo que você não quer responder, sorria e pergunte: \"Por que você quer saber?\".\n14. Lembre-se que grandes amores e grandes conquistas envolvem riscos.\n15. Ligue para sua mãe.\n16. Diga: \"Saúde\", quando alguém espirrar.\n17. Quando você se der conta que cometeu um erro, tome as atitudes necessárias.\n18. Quando você perder, não perca a lição.\n19. Lembre de três R's: Respeito por si próprio, Respeito pelo próximo, Responsabilidade por suas ações.\n20. Não deixe uma pequena disputa ferir uma grande amizade.\n21. Sorria ao atender o telefone. A pessoa que estiver ligando perceberá isso em sua voz.\n22. Case com alguém que você goste de conversar. Ao envelhecerem, suas aptidões de conversação serão tão importantes quanto qualquer outra.\n23. Passe mais tempo sozinho.\n24. Abra seus braços para mudanças, mas não abra mão de seus valores.\n25. Lembre-se de que o silêncio às vezes é a melhor resposta.\n26. Leia mais livros e assista menos TV.\n27. Viva uma vida boa e honrada. Assim, quando você ficar mais velho e olhar para trás poderá aproveitá-la mais uma vez.\n28. Confie em Deus, mas tranque seu carro.\n29. Uma atmosfera de amor em sua casa é muito importante. Faça tudo que puder para criar um lar tranqüilo e com harmonia.\n30. Em desentendimentos com entes queridos, enfoque a situação atual. Não fale do passado.\n31. Leia o que está nas entrelinhas.\n32. Reparta o seu conhecimento. É uma forma de alcançar a imortalidade.\n33. Seja gentil com o planeta.\n34. Reze. Há um poder imensurável nisso.\n35. Nunca interrompa enquanto estiver sendo elogiado.\n36. Cuide de sua própria vida.\n37. Não confie em alguém que não fecha seus olhos quando beija.\n38. Uma vez por ano, vá em algum lugar que nunca esteve antes.\n39. Se você ganhar muito dinheiro, coloque-o a serviço de ajudar outros enquanto você for vivo. Esta é a melhor satisfação da riqueza.\n40. Lembre-se que não conseguir algo que você deseja, às vezes, é um golpe de sorte.\n41. Aprenda as regras e quebre algumas.\n42. Lembre-se que o melhor relacionamento é aquele onde o amor de um pelo outro é maior que a necessidade de um pelo outro.\n43. Julgue seu sucesso pelas coisas que você teve que renunciar para consegui-lo.\n44. Lembre-se que seu caráter é seu destino.\n45. Usufrua o amor e a culinária com abandono total."
    },
    {
        "author": "Desconhecido",
        "phrase": "Cada pessoa que passa em nossa vida, passa sozinha, é porque cada pessoa é única e nenhuma substitui a outra! Cada pessoa que passa em nossa vida passa sozinha e não nos deixa só porque deixa um pouco de si e leva um pouquinho de nós. Essa é a mais bela responsabilidade da vida e a prova de que as pessoas não se encontram por acaso."
    },
    {
        "author": "Desconhecido",
        "phrase": "Pode ser que um dia deixemos de nos falar...\nMas, enquanto houver amizade,\nFaremos as pazes de novo.\n\nPode ser que um dia o tempo passe...\nMas, se a amizade permanecer,\nUm de outro se há-de lembrar.\n\nPode ser que um dia nos afastemos...\nMas, se formos amigos de verdade,\nA amizade nos reaproximará.\n\nPode ser que um dia não mais existamos...\nMas, se ainda sobrar amizade,\nNasceremos de novo, um para o outro.\n\nPode ser que um dia tudo acabe...\nMas, com a amizade construiremos tudo novamente,\nCada vez de forma diferente.\nSendo único e inesquecível cada momento\nQue juntos viveremos e nos lembraremos para sempre."
    },
    {
        "author": "Augusto Cury",
        "phrase": "Posso ter defeitos, viver ansioso e ficar irritado algumas vezes, mas não esqueço que minha vida é a maior empresa do mundo. E que posso evitar que ela vá à falência.\nSer feliz é reconhecer que vale a pena viver, apesar de todos os desafios, incompreensões e períodos de crise.\nSer feliz é deixar de ser vítima dos problemas e se tornar autor da própria história.\nÉ atravessar desertos fora de si, mas ser capaz de encontrar um oásis no recôndito da sua alma.\nÉ agradecer a Deus a cada manhã pelo milagre da vida.\nSer feliz é não ter medo dos próprios sentimentos. É saber falar de si mesmo. É ter coragem para ouvir um “não”. É ter segurança para receber uma crítica, mesmo que injusta."
    },
    {
        "author": "Martha Medeiros",
        "phrase": "Crônica do Amor\n\nNinguém ama outra pessoa pelas qualidades que ela tem, caso contrário os honestos, simpáticos e não fumantes teriam uma fila de pretendentes batendo a porta.\n\nO amor não é chegado a fazer contas, não obedece à razão. O verdadeiro amor acontece por empatia, por magnetismo, por conjunção estelar.\n\nNinguém ama outra pessoa porque ela é educada, veste-se bem e é fã do Caetano. Isso são só referenciais.\n\nAma-se pelo cheiro, pelo mistério, pela paz que o outro lhe dá, ou pelo tormento que provoca.\n\nAma-se pelo tom de voz, pela maneira que os olhos piscam, pela fragilidade que se revela quando menos se espera.\n\nVocê ama aquela petulante. Você escreveu dúzias de cartas que ela não respondeu, você deu flores que ela deixou a seco.\n\nVocê gosta de rock e ela de chorinho, você gosta de praia e ela tem alergia a sol, você abomina Natal e ela detesta o Ano Novo, nem no ódio vocês combinam. Então?\n\nEntão, que ela tem um jeito de sorrir que o deixa imobilizado, o beijo dela é mais viciante do que LSD, você adora brigar com ela e ela adora implicar com você. Isso tem nome.\n\nVocê ama aquele cafajeste. Ele diz que vai e não liga, ele veste o primeiro trapo que encontra no armário. Ele não emplaca uma semana nos empregos, está sempre duro, e é meio galinha. Ele não tem a menor vocação para príncipe encantado e ainda assim você não consegue despachá-lo.\n\nQuando a mão dele toca na sua nuca, você derrete feito manteiga. Ele toca gaita na boca, adora animais e escreve poemas. Por que você ama este cara?\n\nNão pergunte pra mim; você é inteligente. Lê livros, revistas, jornais. Gosta dos filmes dos irmãos Coen e do Robert Altman, mas sabe que uma boa comédia romântica também tem seu valor.\n\nÉ bonita. Seu cabelo nasceu para ser sacudido num comercial de xampu e seu corpo tem todas as curvas no lugar. Independente, emprego fixo, bom saldo no banco. Gosta de viajar, de música, tem loucura por computador e seu fettucine ao pesto é imbatível.\n\nVocê tem bom humor, não pega no pé de ninguém e adora sexo. Com um currículo desse, criatura, por que está sem um amor?\n\nAh, o amor, essa raposa. Quem dera o amor não fosse um sentimento, mas uma equação matemática: eu linda + você inteligente = dois apaixonados.\n\nNão funciona assim.\n\nAmar não requer conhecimento prévio nem consulta ao SPC. Ama-se justamente pelo que o Amor tem de indefinível.\n\nHonestos existem aos milhares, generosos têm às pencas, bons motoristas e bons pais de família, tá assim, ó!\n\nMas ninguém consegue ser do jeito que o amor da sua vida é! Pense nisso. Pedir é a maneira mais eficaz de merecer. É a contingência maior de quem precisa."
    },
    {
        "author": "Augusto Branco",
        "phrase": "A maior covardia de um homem é despertar o amor de uma mulher sem ter a intenção de amá-la."
    },
    {
        "author": "Luís de Camões",
        "phrase": "Amor é fogo que arde sem se ver;\nÉ ferida que dói, e não se sente;\nÉ um contentamento descontente;\nÉ dor que desatina sem doer.\n\nÉ um não querer mais que bem querer;\nÉ um andar solitário entre a gente;\nÉ nunca contentar-se de contente;\nÉ um cuidar que se ganha em se perder.\n\nÉ querer estar preso por vontade;\nÉ servir a quem vence, o vencedor;\nÉ ter com quem nos mata, lealdade.\n\nMas como causar pode seu favor\nNos corações humanos amizade,\nSe tão contrário a si é o mesmo Amor?"
    },
    {
        "author": "Desconhecido",
        "phrase": "Há Momentos\n\nHá momentos na vida em que sentimos tanto\na falta de alguém que o que mais queremos\né tirar esta pessoa de nossos sonhos\ne abraçá-la.\n\nSonhe com aquilo que você quiser.\nSeja o que você quer ser,\nporque você possui apenas uma vida\ne nela só se tem uma chance\nde fazer aquilo que se quer.\n\nTenha felicidade bastante para fazê-la doce.\nDificuldades para fazê-la forte.\nTristeza para fazê-la humana.\nE esperança suficiente para fazê-la feliz.\n\nAs pessoas mais felizes\nnão têm as melhores coisas.\nElas sabem fazer o melhor\ndas oportunidades que aparecem\nem seus caminhos.\n\nA felicidade aparece para aqueles que choram.\nPara aqueles que se machucam.\nPara aqueles que buscam e tentam sempre.\nE para aqueles que reconhecem\na importância das pessoas que passam por suas vidas.\n\nO futuro mais brilhante\né baseado num passado intensamente vivido.\nVocê só terá sucesso na vida\nquando perdoar os erros\ne as decepções do passado.\n\nA vida é curta, mas as emoções que podemos deixar\nduram uma eternidade.\nA vida não é de se brincar,\nporque um belo dia se morre."
    },
    {
        "author": "Mario Quintana",
        "phrase": "A amizade é um amor que nunca morre."
    },
    {
        "author": "Confúcio",
        "phrase": "Para conhecermos os amigos é necessário passar pelo sucesso e pela desgraça. No sucesso, verificamos a quantidade e, na desgraça, a qualidade."
    },
    {
        "author": "Pitágoras",
        "phrase": "Purifica o teu coração antes de permitires que o amor entre nele, pois até o mel mais doce azeda num recipiente sujo."
    },
    {
        "author": "Clarice Lispector",
        "phrase": "Sim, minha força está na solidão. Não tenho medo nem de chuvas tempestivas nem das grandes ventanias soltas, pois eu também sou o escuro da noite."
    },
    {
        "author": "Fernando Pessoa",
        "phrase": "Às vezes ouço passar o vento; e só de ouvir o vento passar, vale a pena ter nascido."
    },
    {
        "author": "Clarice Lispector",
        "phrase": "Sou como você me vê.\nPosso ser leve como uma brisa ou forte como uma ventania,\nDepende de quando e como você me vê passar."
    },
    {
        "author": "William Shakespeare",
        "phrase": "Lutar pelo amor é bom, mas alcançá-lo sem luta é melhor."
    },
    {
        "author": "Carlos Drummond de Andrade",
        "phrase": "Ser feliz sem motivo é a mais autêntica forma de felicidade."
    },
    {
        "author": "Martha Medeiros",
        "phrase": "Definitivo\n\nDefinitivo, como tudo o que é simples. Nossa dor não advém das coisas vividas, mas das coisas que foram sonhadas e não se cumpriram.\n\nSofremos por quê? Porque automaticamente esquecemos o que foi desfrutado e passamos a sofrer pelas nossas projeções irrealizadas, por todas as cidades que gostaríamos de ter conhecido ao lado do nosso amor e não conhecemos, por todos os filhos que gostaríamos de ter tido junto e não tivemos, por todos os shows e livros e silêncios que gostaríamos de ter compartilhado, e não compartilhamos. Por todos os beijos cancelados, pela eternidade.\n\nSofremos não porque nosso trabalho é desgastante e paga pouco, mas por todas as horas livres que deixamos de ter para ir ao cinema, para conversar com um amigo, para nadar, para namorar.\n\nSofremos não porque nossa mãe é impaciente conosco, mas por todos os momentos em que poderíamos estar confidenciando a ela nossas mais profundas angústias se ela estivesse interessada em nos compreender.\n\nSofremos não porque nosso time perdeu, mas pela euforia sufocada.\n\nSofremos não porque envelhecemos, mas porque o futuro está sendo confiscado de nós, impedindo assim que mil aventuras nos aconteçam, todas aquelas com as quais sonhamos e nunca chegamos a experimentar.\n\nPor que sofremos tanto por amor? O certo seria a gente não sofrer, apenas agradecer por termos conhecido uma pessoa tão bacana, que gerou em nós um sentimento intenso e que nos fez companhia por um tempo razoável, um tempo feliz.\n\nComo aliviar a dor do que não foi vivido? A resposta é simples como um verso: Se iludindo menos e vivendo mais!\n\nA cada dia que vivo, mais me convenço de que o desperdício da vida está no amor que não damos, nas forças que não usamos, na prudência egoísta que nada arrisca, e que, esquivando-se do sofrimento, perdemos também a felicidade.\n\nA dor é inevitável. O sofrimento é opcional..."
    },
    {
        "author": "William Shakespeare",
        "phrase": "A suspeita sempre persegue a consciência culpada; o ladrão vê em cada sombra um policial."
    },
    {
        "author": "Haile Selassie",
        "phrase": "Enquanto a cor da pele for mais importante que o brilho dos olhos, haverá guerra."
    },
    {
        "author": "Dalai Lama",
        "phrase": "Só existem dois dias no ano que nada pode ser feito. Um se chama ontem e o outro se chama amanhã, portanto hoje é o dia certo para amar, acreditar, fazer e principalmente viver."
    },
    {
        "author": "Roberto Shinyashiki",
        "phrase": "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado."
    },
    {
        "author": "William Shakespeare",
        "phrase": "Conservar algo que possa recordar-te seria admitir que eu pudesse esquecer-te."
    },
    {
        "author": "Oliver Wendell Holmes Sr.",
        "phrase": "A mente que se abre a uma nova idéia jamais voltará ao seu tamanho original."
    },
    {
        "author": "Dave Barry",
        "phrase": "Dez Coisas que Levei Anos Para Aprender\n\n1. Uma pessoa que é boa com você, mas grosseira com o garçom, não pode ser uma boa pessoa.\n\n2. As pessoas que querem compartilhar as visões religiosas delas com você, quase nunca querem que você compartilhe as suas com elas.\n\n3. Ninguém liga se você não sabe dançar. Levante e dance.\n\n4. A força mais destrutiva do universo é a fofoca.\n\n5. Não confunda nunca sua carreira com sua vida.\n\n6. Jamais, sob quaisquer circunstâncias, tome um remédio para dormir e um laxante na mesma noite.\n\n7. Se você tivesse que identificar, em uma palavra, a razão pela qual a raça humana ainda não atingiu (e nunca atingirá) todo o seu potencial, essa palavra seria \"reuniões\".\n\n8. Há uma linha muito tênue entre \"hobby\" e \"doença mental\".\n\n9. Seus amigos de verdade amam você de qualquer jeito.\n\n10. Nunca tenha medo de tentar algo novo. Lembre-se de que um amador solitário construiu a Arca. Um grande grupo de profissionais construiu o Titanic."
    },
    {
        "author": "Clarice Lispector",
        "phrase": "Liberdade é pouco. O que eu desejo ainda não tem nome."
    },
    {
        "author": "Desconhecido",
        "phrase": "Vocês riem de mim por eu ser diferente, e eu rio de vocês por serem todos iguais."
    },
    {
        "author": "Desconhecido",
        "phrase": "Cada pessoa que passa em nossa vida, passa sozinha, é porque cada pessoa é única e nenhuma substitui a outra! Cada pessoa que passa em nossa vida passa sozinha e não nos deixa só porque deixa um pouco de si e leva um pouquinho de nós. Essa é a mais bela responsabilidade da vida e a prova de que as pessoas não se encontram por acaso."
    },
    {
        "author": "Desconhecido",
        "phrase": "Pode ser que um dia deixemos de nos falar...\nMas, enquanto houver amizade,\nFaremos as pazes de novo.\n\nPode ser que um dia o tempo passe...\nMas, se a amizade permanecer,\nUm de outro se há-de lembrar.\n\nPode ser que um dia nos afastemos...\nMas, se formos amigos de verdade,\nA amizade nos reaproximará.\n\nPode ser que um dia não mais existamos...\nMas, se ainda sobrar amizade,\nNasceremos de novo, um para o outro.\n\nPode ser que um dia tudo acabe...\nMas, com a amizade construiremos tudo novamente,\nCada vez de forma diferente.\nSendo único e inesquecível cada momento\nQue juntos viveremos e nos lembraremos para sempre."
    },
    {
        "author": "Augusto Cury",
        "phrase": "Posso ter defeitos, viver ansioso e ficar irritado algumas vezes, mas não esqueço que minha vida é a maior empresa do mundo. E que posso evitar que ela vá à falência.\nSer feliz é reconhecer que vale a pena viver, apesar de todos os desafios, incompreensões e períodos de crise.\nSer feliz é deixar de ser vítima dos problemas e se tornar autor da própria história.\nÉ atravessar desertos fora de si, mas ser capaz de encontrar um oásis no recôndito da sua alma.\nÉ agradecer a Deus a cada manhã pelo milagre da vida.\nSer feliz é não ter medo dos próprios sentimentos. É saber falar de si mesmo. É ter coragem para ouvir um “não”. É ter segurança para receber uma crítica, mesmo que injusta."
    },
    {
        "author": "Martha Medeiros",
        "phrase": "Crônica do Amor\n\nNinguém ama outra pessoa pelas qualidades que ela tem, caso contrário os honestos, simpáticos e não fumantes teriam uma fila de pretendentes batendo a porta.\n\nO amor não é chegado a fazer contas, não obedece à razão. O verdadeiro amor acontece por empatia, por magnetismo, por conjunção estelar.\n\nNinguém ama outra pessoa porque ela é educada, veste-se bem e é fã do Caetano. Isso são só referenciais.\n\nAma-se pelo cheiro, pelo mistério, pela paz que o outro lhe dá, ou pelo tormento que provoca.\n\nAma-se pelo tom de voz, pela maneira que os olhos piscam, pela fragilidade que se revela quando menos se espera.\n\nVocê ama aquela petulante. Você escreveu dúzias de cartas que ela não respondeu, você deu flores que ela deixou a seco.\n\nVocê gosta de rock e ela de chorinho, você gosta de praia e ela tem alergia a sol, você abomina Natal e ela detesta o Ano Novo, nem no ódio vocês combinam. Então?\n\nEntão, que ela tem um jeito de sorrir que o deixa imobilizado, o beijo dela é mais viciante do que LSD, você adora brigar com ela e ela adora implicar com você. Isso tem nome.\n\nVocê ama aquele cafajeste. Ele diz que vai e não liga, ele veste o primeiro trapo que encontra no armário. Ele não emplaca uma semana nos empregos, está sempre duro, e é meio galinha. Ele não tem a menor vocação para príncipe encantado e ainda assim você não consegue despachá-lo.\n\nQuando a mão dele toca na sua nuca, você derrete feito manteiga. Ele toca gaita na boca, adora animais e escreve poemas. Por que você ama este cara?\n\nNão pergunte pra mim; você é inteligente. Lê livros, revistas, jornais. Gosta dos filmes dos irmãos Coen e do Robert Altman, mas sabe que uma boa comédia romântica também tem seu valor.\n\nÉ bonita. Seu cabelo nasceu para ser sacudido num comercial de xampu e seu corpo tem todas as curvas no lugar. Independente, emprego fixo, bom saldo no banco. Gosta de viajar, de música, tem loucura por computador e seu fettucine ao pesto é imbatível.\n\nVocê tem bom humor, não pega no pé de ninguém e adora sexo. Com um currículo desse, criatura, por que está sem um amor?\n\nAh, o amor, essa raposa. Quem dera o amor não fosse um sentimento, mas uma equação matemática: eu linda + você inteligente = dois apaixonados.\n\nNão funciona assim.\n\nAmar não requer conhecimento prévio nem consulta ao SPC. Ama-se justamente pelo que o Amor tem de indefinível.\n\nHonestos existem aos milhares, generosos têm às pencas, bons motoristas e bons pais de família, tá assim, ó!\n\nMas ninguém consegue ser do jeito que o amor da sua vida é! Pense nisso. Pedir é a maneira mais eficaz de merecer. É a contingência maior de quem precisa."
    },
    {
        "author": "Augusto Branco",
        "phrase": "A maior covardia de um homem é despertar o amor de uma mulher sem ter a intenção de amá-la."
    },
    {
        "author": "Luís de Camões",
        "phrase": "Amor é fogo que arde sem se ver;\nÉ ferida que dói, e não se sente;\nÉ um contentamento descontente;\nÉ dor que desatina sem doer.\n\nÉ um não querer mais que bem querer;\nÉ um andar solitário entre a gente;\nÉ nunca contentar-se de contente;\nÉ um cuidar que se ganha em se perder.\n\nÉ querer estar preso por vontade;\nÉ servir a quem vence, o vencedor;\nÉ ter com quem nos mata, lealdade.\n\nMas como causar pode seu favor\nNos corações humanos amizade,\nSe tão contrário a si é o mesmo Amor?"
    },
    {
        "author": "Desconhecido",
        "phrase": "Há Momentos\n\nHá momentos na vida em que sentimos tanto\na falta de alguém que o que mais queremos\né tirar esta pessoa de nossos sonhos\ne abraçá-la.\n\nSonhe com aquilo que você quiser.\nSeja o que você quer ser,\nporque você possui apenas uma vida\ne nela só se tem uma chance\nde fazer aquilo que se quer.\n\nTenha felicidade bastante para fazê-la doce.\nDificuldades para fazê-la forte.\nTristeza para fazê-la humana.\nE esperança suficiente para fazê-la feliz.\n\nAs pessoas mais felizes\nnão têm as melhores coisas.\nElas sabem fazer o melhor\ndas oportunidades que aparecem\nem seus caminhos.\n\nA felicidade aparece para aqueles que choram.\nPara aqueles que se machucam.\nPara aqueles que buscam e tentam sempre.\nE para aqueles que reconhecem\na importância das pessoas que passam por suas vidas.\n\nO futuro mais brilhante\né baseado num passado intensamente vivido.\nVocê só terá sucesso na vida\nquando perdoar os erros\ne as decepções do passado.\n\nA vida é curta, mas as emoções que podemos deixar\nduram uma eternidade.\nA vida não é de se brincar,\nporque um belo dia se morre."
    },
    {
        "author": "Mario Quintana",
        "phrase": "A amizade é um amor que nunca morre."
    },
    {
        "author": "Confúcio",
        "phrase": "Para conhecermos os amigos é necessário passar pelo sucesso e pela desgraça. No sucesso, verificamos a quantidade e, na desgraça, a qualidade."
    },
    {
        "author": "Pitágoras",
        "phrase": "Purifica o teu coração antes de permitires que o amor entre nele, pois até o mel mais doce azeda num recipiente sujo."
    },
    {
        "author": "Clarice Lispector",
        "phrase": "Sim, minha força está na solidão. Não tenho medo nem de chuvas tempestivas nem das grandes ventanias soltas, pois eu também sou o escuro da noite."
    },
    {
        "author": "Fernando Pessoa",
        "phrase": "Às vezes ouço passar o vento; e só de ouvir o vento passar, vale a pena ter nascido."
    },
    {
        "author": "Clarice Lispector",
        "phrase": "Sou como você me vê.\nPosso ser leve como uma brisa ou forte como uma ventania,\nDepende de quando e como você me vê passar."
    },
    {
        "author": "William Shakespeare",
        "phrase": "Lutar pelo amor é bom, mas alcançá-lo sem luta é melhor."
    },
    {
        "author": "Carlos Drummond de Andrade",
        "phrase": "Ser feliz sem motivo é a mais autêntica forma de felicidade."
    },
    {
        "author": "Martha Medeiros",
        "phrase": "Definitivo\n\nDefinitivo, como tudo o que é simples. Nossa dor não advém das coisas vividas, mas das coisas que foram sonhadas e não se cumpriram.\n\nSofremos por quê? Porque automaticamente esquecemos o que foi desfrutado e passamos a sofrer pelas nossas projeções irrealizadas, por todas as cidades que gostaríamos de ter conhecido ao lado do nosso amor e não conhecemos, por todos os filhos que gostaríamos de ter tido junto e não tivemos, por todos os shows e livros e silêncios que gostaríamos de ter compartilhado, e não compartilhamos. Por todos os beijos cancelados, pela eternidade.\n\nSofremos não porque nosso trabalho é desgastante e paga pouco, mas por todas as horas livres que deixamos de ter para ir ao cinema, para conversar com um amigo, para nadar, para namorar.\n\nSofremos não porque nossa mãe é impaciente conosco, mas por todos os momentos em que poderíamos estar confidenciando a ela nossas mais profundas angústias se ela estivesse interessada em nos compreender.\n\nSofremos não porque nosso time perdeu, mas pela euforia sufocada.\n\nSofremos não porque envelhecemos, mas porque o futuro está sendo confiscado de nós, impedindo assim que mil aventuras nos aconteçam, todas aquelas com as quais sonhamos e nunca chegamos a experimentar.\n\nPor que sofremos tanto por amor? O certo seria a gente não sofrer, apenas agradecer por termos conhecido uma pessoa tão bacana, que gerou em nós um sentimento intenso e que nos fez companhia por um tempo razoável, um tempo feliz.\n\nComo aliviar a dor do que não foi vivido? A resposta é simples como um verso: Se iludindo menos e vivendo mais!\n\nA cada dia que vivo, mais me convenço de que o desperdício da vida está no amor que não damos, nas forças que não usamos, na prudência egoísta que nada arrisca, e que, esquivando-se do sofrimento, perdemos também a felicidade.\n\nA dor é inevitável. O sofrimento é opcional..."
    },
    {
        "author": "William Shakespeare",
        "phrase": "A suspeita sempre persegue a consciência culpada; o ladrão vê em cada sombra um policial."
    },
    {
        "author": "Haile Selassie",
        "phrase": "Enquanto a cor da pele for mais importante que o brilho dos olhos, haverá guerra."
    },
    {
        "author": "Dalai Lama",
        "phrase": "Só existem dois dias no ano que nada pode ser feito. Um se chama ontem e o outro se chama amanhã, portanto hoje é o dia certo para amar, acreditar, fazer e principalmente viver."
    },
    {
        "author": "Roberto Shinyashiki",
        "phrase": "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado."
    },
    {
        "author": "William Shakespeare",
        "phrase": "Conservar algo que possa recordar-te seria admitir que eu pudesse esquecer-te."
    },
    {
        "author": "Oliver Wendell Holmes Sr.",
        "phrase": "A mente que se abre a uma nova idéia jamais voltará ao seu tamanho original."
    },
    {
        "author": "Dave Barry",
        "phrase": "Dez Coisas que Levei Anos Para Aprender\n\n1. Uma pessoa que é boa com você, mas grosseira com o garçom, não pode ser uma boa pessoa.\n\n2. As pessoas que querem compartilhar as visões religiosas delas com você, quase nunca querem que você compartilhe as suas com elas.\n\n3. Ninguém liga se você não sabe dançar. Levante e dance.\n\n4. A força mais destrutiva do universo é a fofoca.\n\n5. Não confunda nunca sua carreira com sua vida.\n\n6. Jamais, sob quaisquer circunstâncias, tome um remédio para dormir e um laxante na mesma noite.\n\n7. Se você tivesse que identificar, em uma palavra, a razão pela qual a raça humana ainda não atingiu (e nunca atingirá) todo o seu potencial, essa palavra seria \"reuniões\".\n\n8. Há uma linha muito tênue entre \"hobby\" e \"doença mental\".\n\n9. Seus amigos de verdade amam você de qualquer jeito.\n\n10. Nunca tenha medo de tentar algo novo. Lembre-se de que um amador solitário construiu a Arca. Um grande grupo de profissionais construiu o Titanic."
    },
    {
        "author": "Clarice Lispector",
        "phrase": "Liberdade é pouco. O que eu desejo ainda não tem nome."
    },
    {
        "author": "Desconhecido",
        "phrase": "Vocês riem de mim por eu ser diferente, e eu rio de vocês por serem todos iguais."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Se os bons combates eu não combater, minha coroa não conquistarei, se minha carreira eu não completar de que vale a minha fé tanto guarda"
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "A leveza, o humor respeitoso é uma linguagem que todo mundo entende."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "A paixão é a supressão temporária de 98% dos recursos da inteligência.\nDurante a fase aguda da paixão a pessoa perde totalmente o senso de realidade, passando a ser guiada pela imaginação."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Testemunhamos mais facilmente a fé que dizemos ter em Deus quando amamos e acolhemos os que precisam de nós."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Quando utilizamos a religião para justificar nossos ódios e preconceitos, privamo-nos de encontrar no outro a verdadeira face de Deus."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Amamos melhor quando nos livramos da pretensão de comandar a vida alheia. Exigir que o outro corresponda ao que esperamos, ainda que isto o negue em sua identidade, é a prova de que somos comandados pelo egoísmo.\nDeixar partir também é ato de amor."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Amor que não se submete ao crivo da razão pode se tornar servidão. A doação ao outro nunca pode supor a supressão do amor próprio.\nSó no exercício da liberdade amamos verdadeiramente."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Ao dizer o que sentimos aceitamos o risco de que o sagrado do sentimento seja banalizado. Convém o silêncio. Nem tudo a palavra sabe dizer."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Alegrar-se mais, estender no tempo a gratidão pelo bem acontecido. Entristecer-se menos, desobrigar a vida de ser como imaginava que seria."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Se te escondes em tuas ilusões\nE te ocultas naquilo que não és\nPerderás a vida e não verás\nA beleza de ser o que tu és"
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Realidades comuns nos nossos dias, em que as pessoas se tornam incapazes de romper com as forças que as destroem. Perdem o amor próprio, deixam de olhar o que amam; desamparam-se aos poucos até perder o senso de direção."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Que cada um cuide do que vê. Que cada um cuide do que diz."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "So o amor pode nos socorrer de nossas miserias.So ele pode nos alcançar no fosso de nossas vergonhas o que me redime e o amor que amo porque nele Deus me encontra com seu poder de complementos."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Eu não quero muita coisa. Quero apenas um centímetro de felicidade."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "O melhor jeito de encaminhar uma criança para a maturidade, é você deixá-la brincar com jogos que tenham regras."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "\"Birra\" é a incapacidade de lidar com o fracasso."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Príncipe encantado tem unhas encravadas! Pede pra ele tirar as botinhas dele pra você ver! Tem suvaqueira de vez em quando, mal hálito quando acorda."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Não posso destruir os mares dos meus medos, mas tenho acreditado que posso atravessa-los."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "O tempo de Deus em sua vida, é o tempo que vc reserva à Ele."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Preconceitos são filhos de nossos olhares apressados."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Quando digo o que sou, de alguma forma eu o faço para também dizer o que não sou. O ‘não ser está no avesso do ser’, assim como o tecido só é tecido porque há um avesso que o nega, não sendo outro, mas complementando-o. O que não sou também é uma forma de ser. Eu sou eu e meus avessos."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Eu sei que o sofrimento tem visitado o teu coração.\nNão tenho muito o que dizer e é bom que seja assim.\nExistem acontecimentos que não combinam com as palavras.\nForam feitos para o silêncio.\nÉ neste momento que nós recorremos aos símbolos, às realidades que falam sem precisar dizer.\nTrouxe flores..."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "padre Fábio de melo"
    },
    {
        "author": "Nelson Sganzerla",
        "phrase": "Se o Papa Francisco for disputar uma medalha de ouro com o Padre. Fábio de Melo, certamente o papa será vaiado."
    },
    {
        "author": "jeanrosana",
        "phrase": "\"Bom mesmo é ter amigos que queiram para nós, o mesmo que Deus quer\".\nPe. Fábio de Melo"
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "- \"Padre Fábio, queria que você fosse lá em casa fazer um exorcismo.\n- Eu não. Cada um que expulse o Diabo que criou. O Diabo é seu. Somente você tem autoridade pra tirá-lo de ação.\""
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "O amor de ontem não serve para hoje. Para cada dia um novo jeito de ser"
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Ser família é um processo artesanal."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Colocou um filho no mundo, não pode brincar de ser família."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Quanto mais eu sonho, muito mais eu me planto no mesmo lugar. Porque os sonhos não me levam, os sonhos me ensinam a ficar."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "eu e vc si sente excluinta das coisa que seus amigos faiz mais nao se sinta assim por que quem e os seus amigos de vdd sao jesus e deus"
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Não desista do amor, não desista de amar!"
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "\"As alegrias costumam ser preparadas no silêncio das duras esperas. Não é justo que o ser humano passe pelas experiências de calvários sem que delas nasçam experiências de ressurreições.\""
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Porque diante da dor sofrida,mais vale um silêncio,uma pausa,que uma palavra inoportuna."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Nós complicamos demais a vida, e por esse motivo sofremos tanto. Deus é simples. Prefere os caminhos inusitados. Olhe ao seu redor. Veja o que é pequeno, humano e torto. Ele costuma se esconder nestes lugares."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "O que você significa é muito mais importante do que o que você faz!"
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "\"Sofra as demoras de Deus e tenha paciência, porque o que Ele está preparando para você é algo inexplicável.\""
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "\"Deus nos ama assim, porque consegue enxergar o que a gente ainda não é, mas o que a gente ainda pode ser.\""
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Sigo a luz\nNo mistério me abandono e me deixo envolver\nMesmo quando o sofrimento se derrama sobre mim\nNa ausência de respostas eu procuro compreender\nHá razões que só a fé pode entender"
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "A superficialidade tem fim, a profundidade não"
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Deixe que Deus fale ao seu coração, para que você saiba o que realmente deve fazer em sua vida."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Renova-me Senhor Jesus, já não quero ser igual.\nPõe em mim seu coração.\nPorque tudo que há dentro de mim, precisa mais de ti."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "A vida é linda!\nMesmo em meio de tantas dificuldades,\nDeus nos quer felizes.\nEu vivo para contar essa notícia."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Sempre Vai Existir Uma Mulher Mais\nBonita Que A Sua, Ou Um Homem Mais\nBonito Que O Seu.Quem Casa Com A\n\" Aparência \", Descasa Pelo Mesmo Motivo.\nO Tempo Passa, A Ídade Chega, Envelhecem.\nA Flor Mais Bela Também\nMurcha Mas O Amor Permanece Pra Sempre.?"
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Não há nada maís bonito do que você ser achado quando está perdido. Não há nada mais bonito que você ser achado num momento que você está perdido sem saber pra onde ir!\nPadre Fabio de Melo."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Quanto maior a distância pra se chegar, maior a satisfação para obter o resultado."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Não importa quantos anos você tenha, mas utilize-se da sabedoria que a vida já lhe deu para você se sentar com todas as suas idades e corrigir um pouco o seu passado."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Quem tem um amigo, tem um anjo."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Cuidar de nossas raízes nos ajuda a viver melhor. Não podemos pensar só nas folhas e frutos, é preciso dar atenção também às nossas raízes."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Pessoas são como diamantes. Corremos o risco de jogá-las fora só porque não tivemos a disposição de olhá-las para além de suas cascas. E então, desperdiçamos grandes riquezas no exercício de alimentar pobrezas.\n-Padre Fábio de Melo"
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Hoje é tempo de ser feliz."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "A arte tem o dom de expiar pecados. Ela nos devolve a coragem no momento em que a fragilidade insiste em soprar em nossos ouvidos a frase da desistência, do abandono da luta."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "O bem da ventura eu quis e assim eu vou... Me aventurando a ser feliz!"
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Eu sou eu e os meus avessos."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "As alegrias costuma ser preparadas no silêncio das duras esperas."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Amigo de verdade é aquele que quando você menos merece, te olha nos olhos e diz que te ama, simplesmente porque não conseguiria viver sem você."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "...a sombra só existe quando brilha alguma luz!"
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Quando a solidão doeu em mim\nQuando o meu passado não passou por mim\nQuando eu não soube compreender a vida\nTu vieste compreender por mim\n\nQuando os meus olhos não podiam ver\nTua mão segura me ajudou a andar\nQuando eu não tinha mais amor no peito\nTeu amor me ajudou a amar..."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Não é justo que o ser humano passe pelas experiências de calvários sem que delas nasçam experiências de ressurreições."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Você experimenta a solidão na sua vida e lamenta a falta de pessoas. Quantas vezes você se perde em você mesmo porque não tem alguém ao seu lado para lhe dizer \"faça assim\", \"vá por esse caminho\". E o que você mais precisaria, era alguém que olhasse nos seus olhos e lhe ajudasse a tomar a decisão certa."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "O que qualifica uma vida é o tanto que a gente ama."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Cores cortam cursos de curvas e estradas.\nCurvam-se os olhos. Curvam-se as almas."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Felicidade é flor miúda.\nFloresce quando encontra fresta."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Mas hoje, o que os outros acham de mim muito pouco me importa [a não ser que sejam pessoas que me amam], porque a minha salvação não depende do que os outros acham de mim, mas do que Deus sabe ao meu respeito."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Sentimentos nobres você alimenta ou não. Sentimentos mesquinhos você alimenta ou não. Tudo passa pela nossa escolha. E à medida em que a gente escolhe o sentimento que vai nos nortear, estamos de alguma forma determinando aquilo que Deus vai conseguir com a gente."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "A dor, que às vezes vem, me faz feliz também, pois nela me recordo o valor que tem a cruz. Quando a noite esconde a luz, Deus acende as estrelas."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "O céu começa nas pedras."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Eu sou um contador de histórias... Gosto de me aventurar no universo das palavras, gosto de vê-las clamando por minhas mãos, desejosas de saírem da condição de silêncio. Escrever é uma forma de desvendar o mundo."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Que todos os dias quando você acordar receba dos céus a bênção de ter sempre por perto as pessoas que te amam!"
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Jesus, somente tenho a ti. Tu és a minha herança."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "É com a ausência que descobrimos o valor da presença."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Encontrar respostas é satisfação temporária. O bom mesmo é a investigação que nos mobiliza."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Quem presta atenção demais naquilo que perdeu, corre o risco de não ver o que está ganhando hoje!"
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Não desista da vida, mesmo quando esta é a opção mais fácil."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "As pessoas que vivem preocupadas com as novelas da vida, se desgastam com pessoas que nem conhecem. Não é fácil compreender o território humano."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Muitos olham pra você e não conseguem ver\no teu valor, te criticam, te desprezam\npor não conhecer teu interior. Mas não\nsabem a história linda que Deus\nescreveu para sua vida"
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Porque vistos de um jeito certo, os erros, eles nos preparam para nossas vitórias e conquistas futuras porque não há aprendizado na vida que não passe pelas experiências dos erros."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Eu preciso de ti Senhor\nEu preciso de ti ó Pai\nSou pequeno demais me dá sua paz\nLargo tudo para te seguir...entra na minha vida..."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Mascarados não podem se amar!"
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Despretenciosa e solitária.\nA rosa vive o processo\nde ser quem é.\nBrota sem ter medida.\nFloresce de cor munida.\nDepois morre.\nIda."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "E não será em vão. O tempo da colheita chegará pra dividir o fruto."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Mesmo fazendo tudo errado, eu não sei viver sem você. Eu não posso ser nem a metade do que eu sou, se você não estiver por perto."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "O apego ao passado pode nos privar das belezas do presente e das esperanças do futuro."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "O tempo é um bom amigo, ele se encarrega de jogar no chão as nossas mentiras, pois é a gente que faz questão de mentir pra gente mesmo, idealizando e enxergando perfeições onde não existe."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Nós só temos o direito de esperar pelo impossível depois de termos feito tudo o que nos foi possível."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Não permita que a vida passe sem\nque as pessoas saibam\no significado que elas tem para você."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Não sou perfeito, ainda estou por ser feito!"
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "\"A amizade é o parentesco das almas.\nÉ o vínculo superior ao sangue,\né o reconhecimento de uma pertença\nque só a vida é capaz de estabelecer.\""
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "A qualidade da vida depende dos sentimentos que escolhemos cultivar."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Você não é obrigado a se transformar num personagem."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Busque aquilo que você pode fazer hoje para que a transformação aconteça."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "O desafio das religiões é ensinar que joelhos orantes precisam ser desdobrados em braços solidários. A síntese é o caminho mais seguro."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Odiar é também uma forma de amar. Diferente, mas é. É que o coração humano nem sempre consegue identificar o sentimento que o move."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Da vida o inevitável. Morrer."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Por mais que a vida tenha modernizado, não podemos esquecer que o amor é artesanal, e a família não é produção em série, é amor todo dia."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "O autoconhecimento não se esgota. É bom que seja assim.\nSer fonte inesgotável, permanecer inédito pra si mesmo, ir embora sem ter sido tudo."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Dar um passo na direção desejada já é chegar!"
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Se você prestar atenção, você vai ver que as pessoas que mais te perdoaram são as que mais te amam, porque o amor não vive sem o perdão."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Se por um instante na vida\nainda que por um instante\nvocê se esquece que é pecador\no céu ganha um anjo na terra\nporque o pior do pecado\né a gente se lembrar sempre dele."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "A vida sempre nos reserva primaveras… Floresçamos."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "O amor é a capacidade de descobrir no outro o que ele ainda não sabia que tinha."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Deus não atende as nossas vontades e sim as nossas necessidades."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Abra os olhos. Há encantos escondidos por toda parte. Presta atenção. São miúdos, mas constantes."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Humano eu sou assim: virtudes e limites, se agora me permites eu aprendo ser feliz,\nsem prender-me ao que não fiz, mas olhando o que é possível."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Deixa partir o que não te pertence mais, deixa seguir o que não poderá voltar, deixa morrer o que a vida já despediu... O que foi já não serve... é passado, e o futuro ainda está do outro lado, e o presente é o presente que o tempo quer te entregar."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "O mais difícil da vida não é dar o tempo, é dar o que somos."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Alguém\n\nAlguém me levou de mim\nAlguém que eu não sei dizer\nAlguém me levou daqui.\nAlguém, esse nome estranho.\nAlguém que eu não vi chegar\nAlguém que eu não vi partir\nAlguém, que se alguém encontrar,\nRecomende que me devolva a mim."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Devolver uma pessoa a ela mesma é, quem sabe, ensinar-lhe um jeito de expulsar o que é ruim e ajudá-la a cultivar o que é bom."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Amor foi feito para amar\nPerdão foi feito pra se dar\nNão semeie pra colher depois, o tal ressentimento."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Nem sempre a vida fala.\nPor vezes o que temos dela é o silêncio!"
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Tempo não foi feito para ficar, ao contrário,\nfoi feito para passar.\nE é bom quem passe."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Quem nunca se irritou com a disciplina alheia, quando na hora da fome a pessoa anuncia: \"Comerei só uma salada!\" ?"
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Algo me diz que se eu ousar espremer a espinha, emagrecerei uns dois quilos."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Bom mesmo é ser um cão. Ninguém se confunde com o seu latido."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "A beleza de cada dia só existe porque não é duradoura."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "O contato com Deus se realiza através da fé, numa atmosfera calma e tranquila, tanto interior como exteriormente."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Há sempre um perigo no amor que tem utilidade. Enquanto o outro exerce uma função na nossa vida, corremos o risco de não experimentar o amor gratuito(...) A utilidade pode parecer amor, mas não é. Amor que se fundamenta na utilidade que o outro tem corre o risco de se transformar em abandono num futuro próximo."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "É preciso amadurecer a dúvida\n\nNem sempre a resposta está pronta. Há uma beleza na dúvida que vale a pena de ser apreciada. Forjar a resposta antes do tempo é a mesma coisa que colher frutos verdes...\n\nDemore na dúvida... E descubra a sabedoria que insiste em se esconder na ausência de palavras."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Não interprete ao pé da letra. Pelo corpo do texto estão as partes que compõem o sentido.\nEsta regra vale para as relações humanas. É no conjunto dos detalhes que nos revelamos.\nMas na revelação há sempre a prevalência do mistério, o que no outro nunca é acessível.\nA Hermenêutica é sempre bem vinda."
    },
    {
        "author": "Padre Fábio de Melo",
        "phrase": "Antes de chorar sobre os limites que possui, antes de reclamar de suas inadequações, e fadar o seu destino ao fim, aceita o desafio de pousar os olhos sobre este aparente estado de fraqueza, e ouse acreditar, que mesmo em estradas de pavimentações precárias, há sempre um destino que poderá nos levar ao local onde o sol se põe tão cheio de beleza"
    }
]
export default phrases;
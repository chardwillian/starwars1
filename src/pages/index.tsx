import Head from 'next/head';
import styles from './home.module.scss'

export default function Home() {
  return (
    <>
        <Head>
        <title>StarWars</title>
        </Head>
        <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <h1>Tudo sobre Star Wars</h1>
           <img src="/images/image2.jpg" alt="Star Wars" />
          <p>
          Star Wars é uma série de filmes criada pelo cineasta George Lucas. Lançada em 1977, a franquia tornou-se um ícone da cultura pop, conquistando milhões de fãs ao redor do mundo. Inspirado em clássicos como Flash Gordon, Star Wars buscou influências que vão desde as produções de Akira Kurosawa aos filmes Western. <br />
          Com um vasto universo próprio, Star Wars está prestes a lançar o último filme de sua terceira trilogia, concluindo a chamada Saga Skywalker. 
          </p>
        
         <h2>As trilogias</h2>
        
         <h3>Trilogia Clássica</h3>
         <p>
         Ao contrário da maioria das histórias, Star Wars não começou a contar sua história pelo começo: a primeira parte da saga que chegou aos cinemas foram os episódios 4 (Uma Nova Esperança, 1974), 5 (O Império Contra-ataca, 1980) e 6 (O Retorno de Jedi, 1983). Neste arco, vemos o universo nas garras do Império Galático, controlado por Palpatine e seu discípulo Darth Vader.<br />
         Quando tudo parecia estar perdido, o Mestre Jedi Obi-Wan Kenobi descobre no jovem Luke Skywalker uma afinidade com a Força. Luke se junta à Aliança Rebelde e, ao lado da Princesa Leia e do contrabandista Han Solo, vão tentar deter os planos malignos do imperador.
         </p>

         <h3>Trilogia Prequel</h3>
         <p>
         Depois de mais de 15 anos sem Star Wars nos cinemas, a saga retornou mostrando as origens de Darth Vader e a decadência da República Galática. Muito mais político que a trilogia clássica, o episódio 1 (A Ameaça Fantasma, 1999), episódio 2 (Ataque dos Clones, 2002) e episódio 3 (A Vingança dos Sith, 2005) mostram as conspirações e reviravoltas que levaram à decadência dos Jedi e ascensão do Império. <br/>
         Os filmes nos mostram um pouco do passado de grandes mestres Jedi, como Yoda e Obi-Wan Kenobi, e revelam o crescimento do poder de Anakin Skywalker e sua mudança para o Lado Sombrio.
         </p> 


         <h3>Trilogia Nova</h3>
         <p>
         Outros 10 anos se passaram até que o episódio 7 (O Despertar da Força) e episódio 8 (Os Últimos Jedi) viessem contar o que aconteceu depois da queda do Império Galático. Ao contrário do que se pensava, as forças sombrias não se dissiparam com a derrocada do imperador, mas se reorganizaram em torno da Primeira Ordem, comandada pelo Supremo Líder Snoke e seu discípulo Kylo Ren. <br />
         A terceira trilogia trouxe de volta personagens clássicos, como Luke, Han e Leia, e apresentou a nova cara da resistência: a padawan Rey, o ex-stormtrooper Finn e o piloto rebelde Poe Dameron. O episódio 9 (A Ascensão Skywalker) estreia neste ano e concluirá a saga iniciada em A Ameaça Fantasma.
         </p>

         <h3>Spin-Offs</h3>
         <p>
         A vastidão do universo criado por George Lucas permitiu ainda que dois spin-offs chegassem às telonas. São eles Rogue One: Uma História Star Wars, que mostra a arriscada missão que possibilitou o roubo dos planos da Estrela da Morte, e Han Solo: Uma História Star Wars, filme que retrata a vida de contrabandista de Han antes de se juntar à Aliança Rebelde. <br/>
         Além das estreias para o cinema, Star Wars conta ainda com dois filmes lançados direto para a TV, Caravana da Coragem e Ewoks: A Batalha de Endor. Os dois longas mostram as aventuras dos Ewoks, raça alienígena que ajuda a combater o Império Galático em O Retorno de Jedi.<br/>
         A franquia ainda abarca 4 séries animadas: Star Wars: Guerras Clônicas, Star Wars: A Guerra dos Clones, Star Wars: Rebels e Star Wars: A Resistência.
         </p>

         <h3>Glossário Star Wars</h3>

         <h4>O que é a Força?</h4>
         <p>
         A Força é a energia que habita em todas as coisas da galáxia. Ela está em tudo e é responsável por toda a vida e equilíbrio do universo. Na franquia, descobrimos que existem pessoas capazes de manipular a Força por meio dos seus pensamentos e emoções. <br/>
         Dois grupos estudam dimensões diferentes da Força: os Jedi se dedicam a cultuar e se aprimorar no Lado Claro, manipulando essa energia para tentar gerar a paz por meio da justiça e do equilíbrio, e os Sith exploram o Lado Sombrio, tentando alcançar a paz por meio da violência e da autoridade.
         </p>

         <h4>Quem são os Jedi?</h4>
         <p>
         Os Jedi são cultistas que se dedicam a estudar o Lado Claro da Força. Para isso, precisam ser serenos e equilibrados, agindo sempre com paciência e moderação. Os Jedi atuam para defender a justiça e ajudar os oprimidos, garantindo que haja liberdade para todos. <br />
         Seu treinamento começa desde cedo, com os jovens Padawans aprendendo a manejar sabres de luz e a usar a Força para o combate e para a cura. Alguns dos mais conhecidos Jedi são Mestre Yoda, Obi-Wan Kenobi e Luke Skywalker.
         </p>

         <h4>Quem são os Sith?</h4>
         <p>
         Os Sith são seguidores do Lado Sombrio da Força. Por acreditar que é apenas por meio obediência e da ordem que é possível haver equilíbrio, os Sith procuram ampliar seus poderes para dominar os mais fracos e impôr suas regras. <br />
         Implacáveis contra aqueles que são contra seus planos, os Sith possuem técnicas mortíferas de combate, que envolvem estrangulamentos e até poderes elétricos por meio da Força. Assim como os Jedi, eles são capazes de manejar sabres de luz. Alguns dos Sith mais conhecidos são Darth Vader, Darth Sidious e Darth Maul.
         </p>

         <h4>O que é o Império Galático?</h4>
         <p>
         O Império Galático é o governo autoritário que se instaurou na galáxia após a queda do Senado. Controlado por Darth Sidious, o Império possui um exército de Stormtroopers e, por meio da violência e do poderio militar, governa os principais planetas do universo. 
         </p>

         <h4>Quem são os rebeldes?</h4>
          <p>
          A Aliança Rebelde é um grupo composto por todos aqueles que se opõe ao Império Galático. Liderados por Leia Organa, os rebeldes lutam para libertar a galáxia da tirania de Darth Sidious e reestabelecer a República, devolvendo a liberdade aos povos subjulgados pelo Império.
          </p>



        </section>
        
      </main>
   </>
  )
}

import YannoLogo from '../../assets/Yanno.svg'
import payment1 from '../../assets/payment1.svg'
import payment2 from '../../assets/payment2.svg'
import payment3 from '../../assets/payment3.svg'
import payment4 from '../../assets/payment4.svg'
import payment5 from '../../assets/payment5.svg'
import payment6 from '../../assets/payment6.svg'
import payment7 from '../../assets/payment7.svg'
import payment8 from '../../assets/payment8.svg'
import vtexLogo from '../../assets/vtexLogo.svg'
import socialLogo from '../../assets/socialLogo.svg'
import instagramLogo from '../../assets/instagramLogo.svg'
import facebookLogo from '../../assets/facebookLogo.svg'
import youtubeLogo from '../../assets/youtubeLogo.svg'
import { Container } from './styles'

export function Footer() {
  return (
    <Container>
      <main>
        <img src={YannoLogo} alt="Logo da Yanno em laranja" />
        <div>
          <div>
            <h2>Minha conta</h2>
            <p>Minha conta</p>
            <p>Meus pedidos</p>
          </div>
          <div>
            <h2>Produtos</h2>
            <p>AZ Pet</p>
            <p>Ômega 3</p>
            <p>Pelo & Pele</p>
          </div>
          <div>
            <h2>Sobre Yanno</h2>
            <p>Quem somos</p>
            <p>Contatos</p>
          </div>
          <div>
            <h2>Precisa de ajuda</h2>
            <p>Política de Privacidade</p>
            <p>Política de frete</p>
            <p>Trocas e Devoluções</p>
            <p>Dúvidas Frequentes</p>
            <p>Contatos</p>
          </div>
        </div>
        <footer>
          <main>
            <div className="links">
              <img src={instagramLogo} alt="" />
              <img src={facebookLogo} alt="" />
              <img src={youtubeLogo} alt="" />
            </div>
            <div className="payments">
              <h2>Pagamento</h2>
              <div>
                <img src={payment1} alt="" />
                <img src={payment2} alt="" />
                <img src={payment3} alt="" />
                <img src={payment4} alt="" />
                <img src={payment5} alt="" />
                <img src={payment6} alt="" />
                <img src={payment7} alt="" />
                <img src={payment8} alt="" />
              </div>
            </div>
            <div className="companies">
              <div>
                <h2>Plataforma</h2>
                <img src={vtexLogo} alt="" />
              </div>
              <div>
                <h2>Managed by:</h2>
                <img src={socialLogo} alt="" />
              </div>
            </div>
          </main>
          <small>
            A loja Yanno é operada pela Social S.A. CNPJ:
            28.511.223/0001-32/Endereço: R. Fernando Falcão, 1111 - Vila
            Claudia, São Paulo - SP 2023 Copyright Yanno. Todos os direitos
            reservados
          </small>
        </footer>
      </main>
    </Container>
  )
}

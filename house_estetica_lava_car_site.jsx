export default function HouseEsteticaSite() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-700/20 to-black"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block border border-yellow-500 text-yellow-400 px-4 py-1 rounded-full text-sm mb-6">
                Estética Automotiva Premium
              </span>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                House <span className="text-yellow-500">Estética</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Atendimento no conforto da sua casa com qualidade, cuidado e acabamento premium para o seu veículo.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/5599999999999"
                  target="_blank"
                  className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-4 rounded-2xl transition-all shadow-lg"
                >
                  Agendar pelo WhatsApp
                </a>

                <a
                  href="#servicos"
                  className="border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black px-8 py-4 rounded-2xl transition-all"
                >
                  Ver Serviços
                </a>
              </div>
            </div>

            <div>
              <div className="bg-zinc-900 border border-yellow-500/30 rounded-3xl h-[420px] flex items-center justify-center shadow-2xl">
                <div className="text-center px-6">
                  <p className="text-yellow-500 text-lg mb-2">Área para foto principal</p>
                  <p className="text-gray-400 text-sm">
                    Depois vocês podem adicionar uma foto profissional do carro ou do atendimento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-zinc-900 rounded-3xl border border-zinc-800 h-[350px] flex items-center justify-center">
              <div className="text-center px-6">
                <p className="text-yellow-500 text-lg mb-2">Área para fotos do serviço</p>
                <p className="text-gray-400 text-sm">
                  Fotos de antes e depois deixam o site muito mais profissional.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6">
              Cuidado profissional para o seu veículo
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              A House Estética oferece um atendimento diferenciado diretamente na casa do cliente, trazendo praticidade, qualidade e um acabamento impecável.
            </p>

            <div className="space-y-4">
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
                <h3 className="text-yellow-500 font-semibold mb-2">Atendimento Delivery</h3>
                <p className="text-gray-400">
                  O serviço é realizado no conforto da sua casa com toda a praticidade.
                </p>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
                <h3 className="text-yellow-500 font-semibold mb-2">Acabamento Premium</h3>
                <p className="text-gray-400">
                  Atenção aos detalhes e excelência em cada etapa do serviço.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="bg-zinc-950 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nossos Serviços</h2>
            <p className="text-gray-400 text-lg">
              Serviços especializados para manter seu carro sempre impecável.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black border border-yellow-500/20 rounded-3xl p-8 hover:border-yellow-500 transition-all">
              <div className="text-yellow-500 text-2xl mb-4">✨</div>
              <h3 className="text-2xl font-semibold mb-4">Lavagem Técnica</h3>
              <p className="text-gray-400 leading-relaxed">
                Limpeza detalhada com foco em segurança, acabamento e preservação do veículo.
              </p>
            </div>

            <div className="bg-black border border-yellow-500/20 rounded-3xl p-8 hover:border-yellow-500 transition-all">
              <div className="text-yellow-500 text-2xl mb-4">🧼</div>
              <h3 className="text-2xl font-semibold mb-4">Higienização Completa</h3>
              <p className="text-gray-400 leading-relaxed">
                Higienização interna completa para deixar o ambiente do veículo limpo e agradável.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Galeria</h2>
          <p className="text-gray-400 text-lg">
            Espaço reservado para fotos dos serviços realizados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl h-72 flex items-center justify-center"
            >
              <div className="text-center">
                <p className="text-yellow-500 mb-2">Foto {item}</p>
                <p className="text-gray-500 text-sm">Adicionar imagem futuramente</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section className="bg-zinc-950 py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Agende seu atendimento
          </h2>

          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Entre em contato e deixe seu veículo com aparência impecável sem sair de casa.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-black border border-zinc-800 rounded-3xl p-6">
              <h3 className="text-yellow-500 font-semibold mb-2">WhatsApp</h3>
              <p className="text-gray-300">(99) 99999-9999</p>
            </div>

            <div className="bg-black border border-zinc-800 rounded-3xl p-6">
              <h3 className="text-yellow-500 font-semibold mb-2">Instagram</h3>
              <p className="text-gray-300">@teste</p>
            </div>

            <div className="bg-black border border-zinc-800 rounded-3xl p-6">
              <h3 className="text-yellow-500 font-semibold mb-2">Horário</h3>
              <p className="text-gray-300">Sábados das 08h às 18h</p>
            </div>
          </div>

          <div className="bg-black border border-yellow-500/20 rounded-3xl p-8 text-left max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 text-center">Localização</h3>

            <div className="bg-zinc-900 rounded-2xl h-64 flex items-center justify-center border border-zinc-800">
              <div className="text-center px-6">
                <p className="text-yellow-500 mb-2">Mapa / endereço</p>
                <p className="text-gray-400 text-sm">
                  Pato Branco - PR | Endereço fictício para testes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 py-8 px-6 text-center text-gray-500 text-sm">
        © 2026 House Estética — Todos os direitos reservados.
      </footer>
    </div>
  );
}

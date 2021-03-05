using System.Collections.Generic;

namespace QuickBuy.Dominio.Entidades
{
   public  class Usuario : Entidade
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public string Nome { get; set; }
        public string SobreNome { get; set; }

        /// <summary>
        /// Um usuário pode ter nenhum ou muitos pedidos
        /// </summary>

        public ICollection<Pedido> Pedidos   { get; set; }

        public override void Validate()
        {
            LimparMensagensValidacao();

            if (string.IsNullOrEmpty(Email) || string.IsNullOrEmpty(Senha))
                AdicionaCritica("Email ou senha não pode ser nulos.");
        }
    }
}

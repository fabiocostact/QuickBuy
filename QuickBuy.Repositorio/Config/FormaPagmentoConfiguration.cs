using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBuy.Dominio.ObjetoDeValor;

namespace QuickBuy.Repositorio.Config
{
    public class FormaPagmentoConfiguration : IEntityTypeConfiguration<FormaPagamento>
    {
        public void Configure(EntityTypeBuilder<FormaPagamento> builder)
        {
            builder.HasKey(paymentForm => paymentForm.Id);

            builder.Property(paymentForm => paymentForm.Nome)
                .IsRequired()
                .HasMaxLength(50);

            builder.Property(paymentForm => paymentForm.Descricao)
                .IsRequired()
                .HasMaxLength(100);
        }
    }
}

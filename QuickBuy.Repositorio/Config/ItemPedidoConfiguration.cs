using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBuy.Dominio.Entidades;
using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Repositorio.Config
{
    public class ItemPedidoConfiguration : IEntityTypeConfiguration<ItemPedido>
    {
        public void Configure(EntityTypeBuilder<ItemPedido> builder)
        {
            builder.HasKey(orderItem => orderItem.Id);

            builder.Property(orderItem => orderItem.ProdutoId)
                .IsRequired();

            builder.Property(orderItem => orderItem.Quantidade)
                .IsRequired();
        }
    }
}

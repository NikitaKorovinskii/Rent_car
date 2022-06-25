using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace server.BdTable
{
    public partial class work100013Context : DbContext
    {
        public work100013Context()
        {
        }

        public work100013Context(DbContextOptions<work100013Context> options)
            : base(options)
        {
        }

        public virtual DbSet<Auth> Auths { get; set; } = null!;
        public virtual DbSet<Car> Cars { get; set; } = null!;
        public virtual DbSet<Client> Clients { get; set; } = null!;
        public virtual DbSet<Event> Events { get; set; } = null!;
        public virtual DbSet<HistoryWallet> HistoryWallets { get; set; } = null!;
        public virtual DbSet<Specification> Specifications { get; set; } = null!;
        public virtual DbSet<TechnicalInspection> TechnicalInspections { get; set; } = null!;
        public virtual DbSet<Trip> Trips { get; set; } = null!;
        public virtual DbSet<Triptimeclient> Triptimeclients { get; set; } = null!;
        public virtual DbSet<Wallet> Wallets { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseNpgsql("Server=45.10.244.15;Port=55532;Database=work100013;Username=work100013;Password=CiDGtd6n9RC2oZquzHgL");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Auth>(entity =>
            {
                entity.ToTable("auth");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Email).HasColumnName("email");

                entity.Property(e => e.IdClient).HasColumnName("id_client");

                entity.Property(e => e.Login).HasColumnName("login");

                entity.Property(e => e.Password).HasColumnName("password");

                entity.HasOne(d => d.IdClientNavigation)
                    .WithMany(p => p.Auths)
                    .HasForeignKey(d => d.IdClient)
                    .HasConstraintName("auth_id_client_fkey");
            });

            modelBuilder.Entity<Car>(entity =>
            {
                entity.HasKey(e => e.IdCar)
                    .HasName("car_pkey");

                entity.ToTable("car");

                entity.Property(e => e.IdCar).HasColumnName("id_car");

                entity.Property(e => e.BodyType)
                    .HasMaxLength(40)
                    .HasColumnName("body_type");

                entity.Property(e => e.CountSeats).HasColumnName("count_seats");

                entity.Property(e => e.ImgCar).HasColumnName("img_car");

                entity.Property(e => e.NameCar)
                    .HasMaxLength(40)
                    .HasColumnName("name_car");

                entity.Property(e => e.NumberCar)
                    .HasMaxLength(6)
                    .HasColumnName("number_car");

                entity.Property(e => e.PriceCar).HasColumnName("price_car");
            });

            modelBuilder.Entity<Client>(entity =>
            {
                entity.HasKey(e => e.IdClient)
                    .HasName("client_pkey");

                entity.ToTable("client");

                entity.Property(e => e.IdClient).HasColumnName("id_client");

                entity.Property(e => e.DataOfBith).HasColumnName("data_of_bith");

                entity.Property(e => e.LastName)
                    .HasMaxLength(50)
                    .HasColumnName("last_name");

                entity.Property(e => e.MiddleName)
                    .HasMaxLength(50)
                    .HasColumnName("middle_name");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .HasColumnName("name");

                entity.Property(e => e.Number).HasColumnName("number");

                entity.Property(e => e.NumberDriver)
                    .HasMaxLength(10)
                    .HasColumnName("number_driver");

                entity.Property(e => e.Passport)
                    .HasMaxLength(10)
                    .HasColumnName("passport");
            });

            modelBuilder.Entity<Event>(entity =>
            {
                entity.HasKey(e => e.IdEvents)
                    .HasName("events_pkey");

                entity.ToTable("events");

                entity.Property(e => e.IdEvents).HasColumnName("id_events");

                entity.Property(e => e.DataEvent).HasColumnName("data_event");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.IdCar).HasColumnName("id_car");

                entity.Property(e => e.Sum).HasColumnName("sum");

                entity.HasOne(d => d.IdCarNavigation)
                    .WithMany(p => p.Events)
                    .HasForeignKey(d => d.IdCar)
                    .HasConstraintName("events_id_car_fkey");
            });

            modelBuilder.Entity<HistoryWallet>(entity =>
            {
                entity.ToTable("history_wallet");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.DateOperation).HasColumnName("date_operation");

                entity.Property(e => e.IdWallet).HasColumnName("id_wallet");

                entity.Property(e => e.Sum)
                    .HasPrecision(10)
                    .HasColumnName("sum");

                entity.Property(e => e.TimeOperation)
                    .HasColumnType("time with time zone")
                    .HasColumnName("time_operation");
            });

            modelBuilder.Entity<Specification>(entity =>
            {
                entity.HasKey(e => e.IdSpecifications)
                    .HasName("specifications_pkey");

                entity.ToTable("specifications");

                entity.Property(e => e.IdSpecifications).HasColumnName("id_specifications");

                entity.Property(e => e.Engine)
                    .HasPrecision(2, 1)
                    .HasColumnName("engine");

                entity.Property(e => e.Horsepower).HasColumnName("horsepower");

                entity.Property(e => e.IdCar).HasColumnName("id_car");

                entity.Property(e => e.Transmission)
                    .HasMaxLength(6)
                    .HasColumnName("transmission");

                entity.HasOne(d => d.IdCarNavigation)
                    .WithMany(p => p.Specifications)
                    .HasForeignKey(d => d.IdCar)
                    .HasConstraintName("specifications_id_car_fkey");
            });

            modelBuilder.Entity<TechnicalInspection>(entity =>
            {
                entity.HasKey(e => e.IdInspection)
                    .HasName("technical_inspection_pkey");

                entity.ToTable("technical_inspection");

                entity.Property(e => e.IdInspection).HasColumnName("id_inspection");

                entity.Property(e => e.DateOfPassage).HasColumnName("date_of_passage");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.IdCar).HasColumnName("id_car");

                entity.Property(e => e.Sum).HasColumnName("sum");

                entity.HasOne(d => d.IdCarNavigation)
                    .WithMany(p => p.TechnicalInspections)
                    .HasForeignKey(d => d.IdCar)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("technical_inspection_id_car_fkey");
            });

            modelBuilder.Entity<Trip>(entity =>
            {
                entity.HasKey(e => e.IdTrip)
                    .HasName("trip_pkey");

                entity.ToTable("trip");

                entity.Property(e => e.IdTrip).HasColumnName("id_trip");

                entity.Property(e => e.EndDate).HasColumnName("end_date");

                entity.Property(e => e.IdCar).HasColumnName("id_car");

                entity.Property(e => e.IdClient).HasColumnName("id_client");

                entity.Property(e => e.StartDate).HasColumnName("start_date");

                entity.Property(e => e.StatusCar).HasColumnName("status_car");

                entity.Property(e => e.StatusTrip).HasColumnName("status_trip");

                entity.HasOne(d => d.IdCarNavigation)
                    .WithMany(p => p.Trips)
                    .HasForeignKey(d => d.IdCar)
                    .HasConstraintName("trip_id_car_fkey");

                entity.HasOne(d => d.IdClientNavigation)
                    .WithMany(p => p.Trips)
                    .HasForeignKey(d => d.IdClient)
                    .HasConstraintName("trip_id_client_fkey");
            });

            modelBuilder.Entity<Triptimeclient>(entity =>
            {
                entity.HasKey(e => e.IdTripTime)
                    .HasName("triptimeclient_pkey");

                entity.ToTable("triptimeclient");

                entity.Property(e => e.IdTripTime).HasColumnName("id_trip_time");

                entity.Property(e => e.IdTrip).HasColumnName("id_trip");

                entity.Property(e => e.Time)
                    .HasColumnType("time with time zone")
                    .HasColumnName("time");

                entity.HasOne(d => d.IdTripNavigation)
                    .WithMany(p => p.Triptimeclients)
                    .HasForeignKey(d => d.IdTrip)
                    .HasConstraintName("triptimeclient_id_trip_fkey");
            });

            modelBuilder.Entity<Wallet>(entity =>
            {
                entity.HasKey(e => e.IdWallet)
                    .HasName("wallet_pkey");

                entity.ToTable("wallet");

                entity.Property(e => e.IdWallet).HasColumnName("id_wallet");

                entity.Property(e => e.IdClient).HasColumnName("id_client");

                entity.Property(e => e.Sum)
                    .HasPrecision(10)
                    .HasColumnName("sum");

                entity.HasOne(d => d.IdClientNavigation)
                    .WithMany(p => p.Wallets)
                    .HasForeignKey(d => d.IdClient)
                    .HasConstraintName("wallet_id_client_fkey");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}

"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Leaf, Droplet, Sparkles, Phone, Mail, MapPin, Clock, Star, Check } from "lucide-react"

export default function HomePage() {
  const [activeService, setActiveService] = useState<"jardin" | "petmovil">("jardin")
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  })

  const serviciosJardin = [
    "Poda y diseño de césped",
    "Mantenimiento de árboles y arbustos",
    "Control de plagas orgánico",
    "Instalación de sistemas de riego",
    "Diseño paisajístico",
    "Limpieza y fertilización",
  ]

  const serviciosPetmovil = [
    "Baño completo con productos premium",
    "Secado profesional",
    "Corte de uñas",
    "Limpieza de oídos",
    "Cepillado y desenredado",
    "Servicio a domicilio",
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    alert("¡Gracias por tu interés! Te contactaremos pronto.")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Leaf className="h-8 w-8 text-primary" />
              <Sparkles className="h-6 w-6 text-accent" />
            </div>
            <span className="text-2xl font-bold text-foreground">
              Verde<span className="text-accent">y</span>Cola
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#servicios"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Servicios
            </a>
            <a
              href="#galeria"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Galería
            </a>
            <a
              href="#testimonios"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Testimonios
            </a>
            <a href="#contacto">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Contáctanos</Button>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">
                Tu jardín <span className="text-primary">verde</span> y tu mascota{" "}
                <span className="text-accent">feliz</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
                Servicios profesionales de mantenimiento de jardines y cuidado móvil para mascotas. Calidad, experiencia
                y amor en cada servicio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg"
                  onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Solicitar Servicio
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg bg-transparent"
                  onClick={() => document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Ver Servicios
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-accent text-accent" />
                  <span className="text-sm font-medium">4.9/5 valoración</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">+500 clientes felices</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img src="/beautiful-garden-with-green-lawn-and-colorful-flow.jpg" alt="Jardín hermoso" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Nuestros Servicios</h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              Ofrecemos servicios profesionales para el cuidado de tu jardín y el bienestar de tus mascotas
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            <Button
              size="lg"
              variant={activeService === "jardin" ? "default" : "outline"}
              onClick={() => setActiveService("jardin")}
              className={activeService === "jardin" ? "bg-primary text-primary-foreground" : ""}
            >
              <Leaf className="mr-2 h-5 w-5" />
              Mantenimiento de Jardines
            </Button>
            <Button
              size="lg"
              variant={activeService === "petmovil" ? "default" : "outline"}
              onClick={() => setActiveService("petmovil")}
              className={activeService === "petmovil" ? "bg-accent text-accent-foreground" : ""}
            >
              <Droplet className="mr-2 h-5 w-5" />
              Petmóvil
            </Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {activeService === "jardin" ? (
              <>
                <div className="space-y-6">
                  <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                    <span className="text-primary font-semibold">🌱 Jardines</span>
                  </div>
                  <h3 className="text-3xl font-bold">Mantenimiento Profesional de Jardines</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Transformamos y mantenemos tu jardín con técnicas profesionales y productos de alta calidad. Desde
                    el diseño hasta el mantenimiento regular, nos encargamos de todo.
                  </p>
                  <div className="grid gap-3">
                    {serviciosJardin.map((servicio, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Check className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-base">{servicio}</span>
                      </div>
                    ))}
                  </div>
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Phone className="mr-2 h-5 w-5" />
                    Agendar Visita
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-[250px] rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="/professional-gardener-trimming-hedge-with-electric.jpg"
                      alt="Poda profesional"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative h-[250px] rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="/beautiful-flower-garden-with-vibrant-roses-and-tul.jpg"
                      alt="Jardín de flores"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative h-[250px] rounded-xl overflow-hidden shadow-lg col-span-2">
                    <img
                      src="/modern-backyard-garden-with-lawn-irrigation-system.jpg"
                      alt="Sistema de riego"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-[250px] rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="/happy-golden-retriever-dog-being-washed-in-mobile-.jpg"
                      alt="Perro siendo bañado"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative h-[250px] rounded-xl overflow-hidden shadow-lg">
                    <img src="/fluffy-clean-white-dog-after-professional-grooming.jpg" alt="Perro limpio" className="w-full h-full object-cover" />
                  </div>
                  <div className="relative h-[250px] rounded-xl overflow-hidden shadow-lg col-span-2">
                    <img
                      src="/professional-pet-groomer-drying-labrador-dog-with-.jpg"
                      alt="Secado profesional"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="inline-block px-4 py-2 bg-accent/10 rounded-full">
                    <span className="text-accent-foreground font-semibold">🐾 Petmóvil</span>
                  </div>
                  <h3 className="text-3xl font-bold">Spa Móvil para tu Mascota</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Llevamos el spa a la puerta de tu casa. Tu mascota disfrutará de un baño relajante y profesional sin
                    el estrés del transporte. Productos hipoalergénicos y trato cariñoso garantizado.
                  </p>
                  <div className="grid gap-3">
                    {serviciosPetmovil.map((servicio, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                          <Check className="h-4 w-4 text-accent-foreground" />
                        </div>
                        <span className="text-base">{servicio}</span>
                      </div>
                    ))}
                  </div>
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Reservar Turno
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Nuestro Trabajo</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Resultados que hablan por sí solos</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg col-span-2 md:col-span-1">
              <img
                src="/before-and-after-garden-transformation-with-lush-g.jpg"
                alt="Transformación de jardín"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
              <img
                src="/happy-clean-poodle-dog-after-grooming-session-smil.jpg"
                alt="Poodle limpio"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
              <img
                src="/professional-garden-with-trimmed-hedges-and-flower.jpg"
                alt="Jardín profesional"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
              <img
                src="/cute-husky-dog-getting-bathed-with-bubbles-looking.jpg"
                alt="Husky en el baño"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg col-span-2">
              <img
                src="/beautiful-backyard-garden-with-stone-pathway-and-c.jpg"
                alt="Jardín con camino"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Lo Que Dicen Nuestros Clientes</h2>
            <p className="text-lg text-muted-foreground">
              La satisfacción de nuestros clientes es nuestra mejor carta de presentación
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                "Mi jardín nunca se vio tan hermoso. El equipo es super profesional y atento a cada detalle. ¡Totalmente
                recomendado!"
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-semibold text-primary">MR</span>
                </div>
                <div>
                  <p className="font-semibold">María Rodríguez</p>
                  <p className="text-sm text-muted-foreground">Cliente de Jardines</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                "El servicio de petmóvil es fantástico. Mi perro queda impecable y lo mejor es que vienen a casa. ¡Ya no
                más estrés!"
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="font-semibold text-accent-foreground">CL</span>
                </div>
                <div>
                  <p className="font-semibold">Carlos López</p>
                  <p className="text-sm text-muted-foreground">Cliente de Petmóvil</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                "Contrato ambos servicios. La calidad es excelente en todo. Mi jardín perfecto y mis mascotas felices.
                ¡Gracias VerdeyCola!"
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-semibold text-primary">AS</span>
                </div>
                <div>
                  <p className="font-semibold">Ana Sánchez</p>
                  <p className="text-sm text-muted-foreground">Cliente Integral</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-balance">¿Listo para comenzar?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Contáctanos hoy y descubre cómo podemos transformar tu jardín y cuidar de tu mascota con el
                profesionalismo que mereces.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-card">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Teléfono</p>
                    <p className="text-muted-foreground">+54 11 1234-5678</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-card">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <p className="text-muted-foreground">info@verdeycola.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-card">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Zona de Cobertura</p>
                    <p className="text-muted-foreground">Buenos Aires y alrededores</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-card">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Horario</p>
                    <p className="text-muted-foreground">Lun - Sáb: 8:00 - 19:00</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Solicita tu Presupuesto</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium mb-2">
                    Nombre Completo
                  </label>
                  <Input
                    id="nombre"
                    placeholder="Tu nombre"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium mb-2">
                    Teléfono
                  </label>
                  <Input
                    id="telefono"
                    type="tel"
                    placeholder="+54 11 1234-5678"
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium mb-2">
                    Mensaje
                  </label>
                  <Textarea
                    id="mensaje"
                    placeholder="Cuéntanos qué servicio necesitas..."
                    rows={4}
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Enviar Solicitud
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="h-6 w-6" />
                <span className="text-xl font-bold">VerdeyCola</span>
              </div>
              <p className="text-background/80 leading-relaxed">
                Tu jardín verde y tu mascota feliz. Servicios profesionales con amor y dedicación.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-background/80">
                <li>Mantenimiento de Jardines</li>
                <li>Diseño Paisajístico</li>
                <li>Petmóvil - Lavado</li>
                <li>Grooming Completo</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-background/80">
                <li>+54 11 1234-5678</li>
                <li>info@verdeycola.com</li>
                <li>Buenos Aires, Argentina</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 text-center text-background/60">
            <p>&copy; 2025 VerdeyCola. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

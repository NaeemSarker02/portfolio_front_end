"use client"
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image placeholder */}
          {/* <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
            <div className="relative bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 border border-border/50 group-hover:border-primary/50 transition-all duration-300 h-96 flex items-center justify-center">
             
              <div className="text-center">
                <div className="text-6xl font-bold text-primary/30 mb-4">👨‍💻</div>
                <p className="text-muted-foreground">Your photo here</p>
              </div>


            </div>
          </div> */}

          {/* Left side - Image */}
<div className="relative group">
  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
  <div className="relative bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-2 border border-border/50 group-hover:border-primary/50 transition-all duration-300 h-96 flex items-center justify-center overflow-hidden">
    <div className="w-full h-full rounded-2xl relative">
      <Image
        src="/images/me4.jpg"           // <-- path inside public/
        alt="My photo"
        fill                           // fills the parent (requires parent position relative)
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover rounded-2xl"
        priority                       // optional: loads early for hero/important images
      />
    </div>
  </div>
</div>


          {/* Right side - Content */}
          <div>
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate full-stack developer with 5+ years of experience building scalable web applications. I
              love turning complex problems into simple, beautiful, and intuitive designs.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              sharing knowledge with the developer community.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { number: "50+", label: "Projects" },
                { number: "30+", label: "Clients" },
                { number: "5+", label: "Years Exp" },
              ].map(({ number, label }) => (
                <div
                  key={label}
                  className="p-4 rounded-lg bg-primary/10 border border-primary/20 hover:bg-primary/20 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                >
                  <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                    {number}
                  </div>
                  <div className="text-sm text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

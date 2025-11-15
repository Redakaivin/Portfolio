import React from "react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 px-4 bg-secondary/30 min-h-screen">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-8">
          Contact <span className="text-primary">Me</span>
        </h2>

        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          Feel free to reach out for collaborations, freelance work, or just a friendly chat!
        </p>

        <div className="grid sm:grid-cols-2 gap-6">

          <a 
            href="mailto:yourmail@gmail.com"
            className="gradient-border bg-glass p-6 rounded-xl shadow-lg hover:scale-[1.02] transition-all duration-300 flex flex-col items-center"
          >
            <Mail className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-xl">Email</h3>
            <p className="text-primary text-sm mt-1">vinet.sv42@gmail.com</p>
          </a>

          <a 
            href="tel:+919000000000"
            className="gradient-border bg-glass p-6 rounded-xl shadow-lg hover:scale-[1.02] transition-all duration-300 flex flex-col items-center"
          >
            <Phone className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-xl">Phone</h3>
            <p className="text-primary text-sm mt-1">7276348485</p>
          </a>

          <a 
            href="https://github.com/Redakaivin"
            target="_blank"
            className="gradient-border bg-glass p-6 rounded-xl shadow-lg hover:scale-[1.02] transition-all duration-300 flex flex-col items-center"
          >
            <Github className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-xl">GitHub</h3>
            <p className="text-primary text-sm mt-1">View my work</p>
          </a>

          <a 
            href="www.linkedin.com/in/vinit-sawant4246"
            target="_blank"
            className="gradient-border bg-glass p-6 rounded-xl shadow-lg hover:scale-[1.02] transition-all duration-300 flex flex-col items-center"
          >
            <Linkedin className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-xl">LinkedIn</h3>
            <p className="text-primary text-sm mt-1">Connect with me</p>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Contact;

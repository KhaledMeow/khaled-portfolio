import React from "react";
import { Card } from "./components/ui/card";
import { Button } from "./components/ui/button";

export default function Portfolio() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#000000',
      color: '#fca53a',
      padding: '1.5rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <header style={{
        maxWidth: '56rem',
        width: '100%',
        marginBottom: '3rem',
        textAlign: 'center'
      }}>
        <h1 className="text-4xl font-bold mb-2">Khaled Waleed</h1>
        <p style={{
          fontSize: '1.125rem',
          color: '#e5e7eb',
          margin: 0
        }}>
          Front-End Web Developer | React.js
        </p><br />
        <div className="mt-4 flex gap-4">
          <Button asChild variant="default">
            <a href="/Khaled-Waleed-Resume.pdf" download style={{
              color: 'white',
              textDecoration: 'none',
              display: 'inline-block',
              width: '100%',
              height: '100%',
              padding: '0.25rem 0.5rem'
            }}>
              Download CV
            </a>
          </Button>
        </div>
      </header>

      <main style={{
        maxWidth: '56rem',
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <section id="projects" style={{
          marginBottom: '3rem',
          width: '100%',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 600,
            marginBottom: '1rem',
            textAlign: 'center'
          }}>Projects</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '1rem',
            backgroundColor: '#fca53a',
            padding: '1rem',
            borderRadius: '0.5rem'
          }}>
            <Card className="p-4">
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 600,
                lineHeight: '1.25',
                letterSpacing: '-0.025em',
                color: '#ffffff',
                margin: 0
              }}>Nova Hotel Management System</h3>
              <p style={{
                fontSize: '0.875rem',
                color: '#ffffff',
                margin: 0
              }}>
                Full-Stack website using MongoDB, Express.js, React.js, and Node.js
              </p>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '0.5rem',
                color: '#ffffff',
                padding: '0.5rem',
                width: '100%'
              }}>
                <Button asChild size="sm" textAlign="center" variant="default" style={{
                  fontSize: '1rem',
                  padding: '0.5rem 1rem'
                }}>
                  <a href="https://github.com/KhaledMeow/nova-hotel/tree/Full-Website" target="_blank" rel="noopener noreferrer" style={{
                    color: 'white',
                    textDecoration: 'none',
                    display: 'inline-block',
                    width: '100%',
                    height: '100%',
                    padding: '0.25rem 0.5rem',
                    fontSize: '1rem'
                  }}>
                    GitHub
                  </a>
                </Button>
              </div>
            </Card>
            {/* Add more projects here */}
          </div>
        </section>

        <section id="contact" style={{
          marginBottom: '3rem',
          width: '100%',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 600,
            marginBottom: '1rem',
            textAlign: 'center'
          }}>Contact</h2>
          <ul style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>
            <li>Email: khaled.waleed.10802@gmail.com</li>
            <li>Phone: +20 1068339047</li>
            <li>GitHub: <a style={{
              color: '#ffffff',
              textDecoration: 'underline'
            }} href="https://github.com/KhaledMeow" target="_blank">github.com/KhaledMeow</a></li>
          </ul>
        </section>
      </main>

      <footer style={{
        textAlign: 'center',
        fontSize: '0.875rem',
        color: '#9ca3af',
        marginTop: 'auto',
        padding: '1.5rem 0'
      }}>
        &copy; {new Date().getFullYear()} Khaled Waleed. All rights reserved.
      </footer>
    </div>
  );
}

import BlogPost from '@/components/BlogPost';
import Terminal from '@/components/ui/Terminal';
import CodeBlock from '@/components/ui/CodeBlock';
import MathFormula from '@/components/ui/MathFormula';
import Link from 'next/link';

export default function CFDPost() {
  // Sample C++ code for CFD simulation
  const navierStokesCode = `// 2D Navier-Stokes solver using Finite Difference Method
#include <iostream>
#include <vector>
#include <cmath>

// Parameters for simulation
const double Re = 1000.0;  // Reynolds number
const double dt = 0.001;   // Time step
const int Nx = 100;        // Grid points in x
const int Ny = 100;        // Grid points in y
const double Lx = 1.0;     // Domain length in x
const double Ly = 1.0;     // Domain length in y

// Velocity components and pressure field
std::vector<std::vector<double>> u(Nx, std::vector<double>(Ny, 0.0));
std::vector<std::vector<double>> v(Nx, std::vector<double>(Ny, 0.0));
std::vector<std::vector<double>> p(Nx, std::vector<double>(Ny, 0.0));

// Spatial discretization
double dx = Lx / (Nx - 1);
double dy = Ly / (Ny - 1);

void solve_momentum_equation() {
    // Apply finite difference scheme to Navier-Stokes equations
    // u-momentum equation
    for (int i = 1; i < Nx-1; i++) {
        for (int j = 1; j < Ny-1; j++) {
            // Convective terms
            double convection_u = u[i][j] * (u[i+1][j] - u[i-1][j]) / (2*dx) + 
                                v[i][j] * (u[i][j+1] - u[i][j-1]) / (2*dy);
            
            // Pressure gradient
            double pressure_grad = (p[i+1][j] - p[i-1][j]) / (2*dx);
            
            // Diffusion (viscous) terms
            double diffusion_u = (u[i+1][j] - 2*u[i][j] + u[i-1][j]) / (dx*dx) + 
                               (u[i][j+1] - 2*u[i][j] + u[i][j-1]) / (dy*dy);
            
            // Update velocity
            u[i][j] += dt * (-convection_u - pressure_grad + (1.0/Re) * diffusion_u);
        }
    }
    
    // Similar implementation for v-momentum equation...
}`;

  return (
    <BlogPost
      title="Understanding Computational Fluid Dynamics: Theory and Implementation"
      date="March 10, 2025"
      tags={['CFD', 'C++', 'physics', 'numerical-methods', 'simulation']}
    >
      <div className="mb-8 p-4 border dark:border-dark-border border-light-border dark:bg-dark-surface/50 bg-light-surface/50">
        <Terminal 
          text="./simulate_fluid --precision=high" 
          typingSpeed={50}
          className="mb-2"
        />
        <p className="text-sm text-gray-600 dark:text-gray-400 italic">
          From equations to simulations: exploring the mathematical foundations and implementation of CFD
        </p>
      </div>

      <h2 className="text-xl mb-4 mt-8 dark:text-dark-accent text-light-accent">The Mathematics Behind Fluid Flow</h2>
      
      <p className="mb-4">
        At the heart of Computational Fluid Dynamics (CFD) lies a set of partial differential equations 
        that describe how fluids behave. The most fundamental of these are the Navier-Stokes equations, 
        which represent conservation of momentum in a fluid:
      </p>

      <div className="card mb-6 p-4 flex justify-center">
        <MathFormula 
          formula={`\\rho \\left( \\frac{\\partial \\mathbf{u}}{\\partial t} + \\mathbf{u} \\cdot \\nabla \\mathbf{u} \\right) = -\\nabla p + \\mu \\nabla^2 \\mathbf{u} + \\rho \\mathbf{g}`}
          display={true}
          className="my-4"
        />
      </div>

      <p className="mb-4">
        This intimidating equation can be broken down into more manageable components:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="card">
          <h3 className="terminal-prompt mb-2">Left Side: Acceleration</h3>
          <div className="mb-2 flex justify-center">
            <MathFormula formula={`\\rho \\left( \\frac{\\partial \\mathbf{u}}{\\partial t} + \\mathbf{u} \\cdot \\nabla \\mathbf{u} \\right)`} />
          </div>
          <p className="text-sm">
            This represents the fluid's acceleration, including both local acceleration (change over time) and 
            convective acceleration (change due to moving to a location with different velocity).
          </p>
        </div>
        <div className="card">
          <h3 className="terminal-prompt mb-2">Right Side: Forces</h3>
          <div className="mb-2 flex justify-center">
            <MathFormula formula={`-\\nabla p + \\mu \\nabla^2 \\mathbf{u} + \\rho \\mathbf{g}`} />
          </div>
          <p className="text-sm">
            This represents the forces acting on the fluid: pressure gradient forces, viscous forces 
            (friction), and body forces like gravity.
          </p>
        </div>
      </div>

      <p className="mb-4">
        Additionally, we must satisfy the continuity equation, which enforces conservation of mass:
      </p>

      <div className="card mb-6 p-4 flex justify-center">
        <MathFormula 
          formula={`\\frac{\\partial \\rho}{\\partial t} + \\nabla \\cdot (\\rho \\mathbf{u}) = 0`}
          display={true}
          className="my-4"
        />
      </div>

      <p className="mb-4">
        For incompressible flow (where density remains constant), this simplifies to:
      </p>

      <div className="card mb-6 p-4 flex justify-center">
        <MathFormula 
          formula={`\\nabla \\cdot \\mathbf{u} = 0`}
          display={true}
          className="my-4"
        />
      </div>

      <h2 className="text-xl mb-4 mt-8 dark:text-dark-accent text-light-accent">Discretization: From Continuous to Computable</h2>
      
      <p className="mb-4">
        These continuous equations must be discretized to be solved numerically. The three main approaches are:
      </p>

      <div className="card mb-6">
        <ul className="list-disc pl-5 space-y-2">
          <li><span className="text-light-accent dark:text-dark-accent">Finite Difference Method (FDM):</span> Approximates derivatives using Taylor series expansions</li>
          <li><span className="text-light-accent dark:text-dark-accent">Finite Volume Method (FVM):</span> Integrates equations over control volumes</li>
          <li><span className="text-light-accent dark:text-dark-accent">Finite Element Method (FEM):</span> Uses weighted residuals with basis functions</li>
        </ul>
      </div>

      <p className="mb-4">
        For a 2D problem using the Finite Difference Method, the u-momentum equation becomes:
      </p>

      <div className="card mb-6 p-4 flex justify-center">
        <MathFormula 
          formula={`\\frac{u_{i,j}^{n+1} - u_{i,j}^n}{\\Delta t} + u_{i,j}^n\\frac{u_{i+1,j}^n - u_{i-1,j}^n}{2\\Delta x} + v_{i,j}^n\\frac{u_{i,j+1}^n - u_{i,j-1}^n}{2\\Delta y} = -\\frac{1}{\\rho}\\frac{p_{i+1,j}^n - p_{i-1,j}^n}{2\\Delta x} + \\nu\\left(\\frac{u_{i+1,j}^n - 2u_{i,j}^n + u_{i-1,j}^n}{\\Delta x^2} + \\frac{u_{i,j+1}^n - 2u_{i,j}^n + u_{i,j-1}^n}{\\Delta y^2}\\right)`}
          display={true}
          className="my-4"
        />
      </div>

      <h2 className="text-xl mb-4 mt-8 dark:text-dark-accent text-light-accent">Implementation in C++</h2>
      
      <p className="mb-4">
        Let's look at a simplified implementation of a 2D Navier-Stokes solver using the Finite Difference Method:
      </p>

      <CodeBlock 
        code={navierStokesCode}
        language="cpp"
        fileName="navier_stokes_solver.cpp"
      />

      <h2 className="text-xl mb-4 mt-8 dark:text-dark-accent text-light-accent">Boundary Conditions: Constraining the Problem</h2>
      
      <p className="mb-4">
        To solve these equations, we need to define boundary conditions. Common types include:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="card">
          <h3 className="terminal-prompt mb-2">Dirichlet</h3>
          <div className="mb-2 flex justify-center">
            <MathFormula formula={`\\mathbf{u} = \\mathbf{u}_{boundary}`} />
          </div>
          <p className="text-sm">
            Specifies the value of the variable at the boundary.
          </p>
        </div>
        <div className="card">
          <h3 className="terminal-prompt mb-2">Neumann</h3>
          <div className="mb-2 flex justify-center">
            <MathFormula formula={`\\frac{\\partial \\mathbf{u}}{\\partial n} = q`} />
          </div>
          <p className="text-sm">
            Specifies the gradient normal to the boundary.
          </p>
        </div>
        <div className="card">
          <h3 className="terminal-prompt mb-2">Periodic</h3>
          <div className="mb-2 flex justify-center">
            <MathFormula formula={`\\mathbf{u}(x_0) = \\mathbf{u}(x_L)`} />
          </div>
          <p className="text-sm">
            Flow exiting one boundary enters the opposite boundary.
          </p>
        </div>
      </div>

      <h2 className="text-xl mb-4 mt-8 dark:text-dark-accent text-light-accent">The Pressure-Velocity Coupling Challenge</h2>
      
      <p className="mb-4">
        One of the major challenges in incompressible flow simulation is that pressure and velocity are 
        coupled through the incompressibility constraint, yet there's no explicit equation for pressure. 
        Several algorithms address this:
      </p>

      <div className="card mb-6">
        <ul className="list-disc pl-5 space-y-2">
          <li><span className="text-light-accent dark:text-dark-accent">SIMPLE:</span> Semi-Implicit Method for Pressure-Linked Equations</li>
          <li><span className="text-light-accent dark:text-dark-accent">PISO:</span> Pressure Implicit with Splitting of Operators</li>
          <li><span className="text-light-accent dark:text-dark-accent">Fractional Step Methods:</span> Solve momentum and pressure correction sequentially</li>
        </ul>
      </div>

      <p className="mb-4">
        The Poisson equation for pressure in an incompressible flow is:
      </p>

      <div className="card mb-6 p-4 flex justify-center">
        <MathFormula 
          formula={`\\nabla^2 p = \\rho \\nabla \\cdot \\left( \\mathbf{u} \\cdot \\nabla \\mathbf{u} \\right)`}
          display={true}
          className="my-4"
        />
      </div>

      <h2 className="text-xl mb-4 mt-8 dark:text-dark-accent text-light-accent">Turbulence Modeling: Capturing Chaotic Flow</h2>
      
      <p className="mb-4">
        Directly solving the Navier-Stokes equations for turbulent flows (Direct Numerical Simulation) 
        requires prohibitively fine meshes. Instead, we use models:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="card">
          <h3 className="terminal-prompt mb-2">RANS Models</h3>
          <p className="text-sm">
            Reynolds-Averaged Navier-Stokes models like k-ε and k-ω statistically average the turbulent fluctuations.
          </p>
          <div className="mt-2 flex justify-center">
            <MathFormula formula={`-\\overline{u'_i u'_j} = \\nu_t \\left( \\frac{\\partial \\bar{u}_i}{\\partial x_j} + \\frac{\\partial \\bar{u}_j}{\\partial x_i} \\right) - \\frac{2}{3}k\\delta_{ij}`} display={true} />
          </div>
        </div>
        <div className="card">
          <h3 className="terminal-prompt mb-2">LES Approach</h3>
          <p className="text-sm">
            Large Eddy Simulation resolves large turbulent structures and models only the small scales.
          </p>
          <div className="mt-2 flex justify-center">
            <MathFormula formula={`\\tau_{ij} - \\frac{1}{3}\\tau_{kk}\\delta_{ij} = -2C\\Delta^2 |\\bar{S}|\\bar{S}_{ij}`} display={true} />
          </div>
        </div>
      </div>

      <h2 className="text-xl mb-4 mt-8 dark:text-dark-accent text-light-accent">Verification and Validation: Ensuring Accuracy</h2>
      
      <p className="mb-4">
        Before trusting CFD results, we must verify (check if we're solving the equations correctly) 
        and validate (check if we're solving the right equations) our simulations:
      </p>

      <div className="card mb-8">
        <ol className="list-decimal pl-5 space-y-2">
          <li><span className="text-light-accent dark:text-dark-accent">Grid Convergence Study:</span> Refine the mesh until the solution stops changing significantly</li>
          <li><span className="text-light-accent dark:text-dark-accent">Method of Manufactured Solutions:</span> Create an analytical solution and verify convergence rates</li>
          <li><span className="text-light-accent dark:text-dark-accent">Comparison with Benchmark Cases:</span> Test against well-established flow scenarios</li>
          <li><span className="text-light-accent dark:text-dark-accent">Experimental Validation:</span> Compare with laboratory measurements</li>
        </ol>
      </div>

      <h2 className="text-xl mb-4 mt-8 dark:text-dark-accent text-light-accent">Conclusion: The Art and Science of CFD</h2>
      
      <p className="mb-4">
        Computational Fluid Dynamics is both an art and a science. While the mathematical foundations 
        are rigorous, implementing efficient and accurate simulations requires experience, intuition, 
        and continuous learning.
      </p>

      <p className="mb-4">
        As computing power increases and algorithms improve, CFD continues to advance our understanding 
        of fluid phenomena across scales—from blood flow in capillaries to weather patterns across 
        continents.
      </p>

      <div className="card mt-12 mb-8 p-4">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 italic">
          Want to dive deeper? Check out these topics:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>High-order numerical schemes for CFD</li>
          <li>Adaptive mesh refinement techniques</li>
          <li>GPU acceleration for CFD computations</li>
          <li>Machine learning approaches to turbulence modeling</li>
        </ul>
      </div>

      <div className="mt-12 pt-8 border-t dark:border-dark-border border-light-border">
        <Link href="/blog" className="text-light-accent dark:text-dark-accent hover:underline">
          ← Back to all posts
        </Link>
      </div>
    </BlogPost>
  );
}

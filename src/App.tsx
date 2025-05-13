import React from "react";
import "./index.css";

const NAV_LINKS = [
  { label: "Personal", href: "#personal" },
  { label: "Business", href: "#business" },
  { label: "Transact", href: "#transact" },
  { label: "Save", href: "#save" },
  { label: "Insure", href: "#insure" },
  { label: "Credit", href: "#credit" },
];

function Navbar() {
  return (
    <nav className="w-full px-6 py-4 bg-white shadow flex items-center justify-between">
      <div className="flex items-center gap-6">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Capitec_Bank_logo.svg/2560px-Capitec_Bank_logo.svg.png" alt="Bank Logo" className="h-7 w-auto"/>
        <div className="flex gap-6">
          {NAV_LINKS.slice(0, 2).map(link => (
            <a key={link.label} href={link.href} className="font-medium text-zinc-800 hover:text-blue-600 transition-colors border-b-2 border-transparent hover:border-blue-400 pb-1">{link.label}</a>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="border border-blue-600 text-blue-600 rounded-full px-4 py-1 hover:bg-blue-50 transition">Get the app</button>
        <button className="bg-blue-600 text-white rounded-full px-4 py-1 font-semibold hover:bg-blue-700 transition">Switch</button>
      </div>
    </nav>
  );
}

function SecurityBasics() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full md:w-96 mb-4 md:mb-0 md:ml-4">
      <h2 className="font-semibold text-lg mb-2 text-zinc-800">Security Basics</h2>
      <ul className="list-decimal pl-4 text-sm text-zinc-700 space-y-1">
        <li>We will NEVER ask for your password or PIN by email, SMS or phone.</li>
        <li>Always keep your username and password secret.</li>
        <li>Never use a link or attachment in an unexpected message to access online banking.</li>
        <li>Check the website address and security certificate before logging in.</li>
        <li>Monitor accounts and report suspicious activity immediately.</li>
      </ul>
    </div>
  );
}

function SignInCard() {
  return (
    <div className="bg-white rounded-2xl shadow-xl flex flex-col md:flex-row max-w-3xl w-full overflow-hidden">
      <div className="flex-1 p-8 flex flex-col justify-center">
        <div className="flex gap-2 mb-4">
          <button className="rounded-full px-4 py-1 bg-blue-100 text-blue-700 font-semibold">Personal Banking</button>
          <button className="rounded-full px-4 py-1 bg-zinc-100 text-zinc-700 font-semibold hover:bg-blue-50">Business Banking</button>
        </div>
        <h1 className="text-3xl font-bold mb-2 text-zinc-900">Sign in to Online Banking</h1>
        <p className="mb-6 text-zinc-700">Access your banking profile quickly and securely, or switch to your business profile above.</p>
        <form className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="username" className="text-sm text-zinc-800 mb-1 font-medium">Account number / Username</label>
            <input id="username" type="text" className="px-4 py-2 rounded border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition" placeholder="Enter your details"/>
          </div>
          <button className="mt-2 bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition font-semibold">Continue</button>
        </form>
      </div>
      <div className="hidden md:block flex-1 bg-blue-50 flex items-center justify-center relative">
        <img
          src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
          alt="Banking Illustration"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}

function CookieBanner() {
  const [show, setShow] = React.useState(true);
  if (!show) return null;
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-md flex flex-col md:flex-row gap-2 md:gap-0 items-center justify-between px-4 py-3 z-40">
      <span className="text-sm text-zinc-700">We use cookies for a personalised experience. Manage your settings at any time.</span>
      <div className="flex gap-2 mt-2 md:mt-0">
        <button className="px-4 py-1 border border-zinc-300 rounded hover:bg-zinc-100 transition" onClick={() => setShow(false)}>Cookie Settings</button>
        <button className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition" onClick={() => setShow(false)}>Accept All</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center py-12 px-2">
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl gap-6">
          <SignInCard />
          <SecurityBasics />
        </div>
      </main>
      <CookieBanner />
    </div>
  );
}

export default App;

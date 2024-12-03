import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className=" bottom-0 left-0 w-full bg-black text-white text-center py-4 px-44">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-2">
          <img
            src="/images/logo-white.png"
            alt="logo"
            className="w-186 h-40px"
          />
          <span className="mx-11">{" | "}</span>
          <span className="text-sm text-gray-500">Copyright 2024</span>
        </div>
        <div className="flex items-center gap-4 text-white">
          <Button variant="ghost" size="icon">
            <Facebook className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Twitter className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Youtube className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
}

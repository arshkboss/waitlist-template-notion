"use client"

import { toast } from "@/hooks/use-toast"
import { Check, AlertCircle } from "lucide-react"

interface ToastProps {
    message: string;
    type?: 'success' | 'error';
}

export const showToast = ({ message, type = 'success' }: ToastProps) => {
    toast({
        variant: type === 'success' ? 'default' : 'destructive',
        className: `
            bg-[#0a0f1c]/95 
            border border-white/10 
            text-white 
            rounded-xl 
            shadow-lg 
            backdrop-blur-lg
        `,
        title: type === 'success' ? 'Success' : 'Error',
        description: message,
        icon: type === 'success' ? 
            <Check className="w-5 h-5 text-[#48CAE4] animate-fade-in" /> : 
            <AlertCircle className="w-5 h-5 text-red-400 animate-fade-in" />,
    })
} 
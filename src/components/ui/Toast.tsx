import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { cn } from '@/utils/cn';

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  message: string;
}

interface ToastProps {
  toast: ToastMessage | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ toast, onClose }) => {
  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-50 max-w-md"
          role="status"
          aria-live="polite"
        >
          <div
            className={cn(
              'flex items-center gap-3 px-4 py-3 rounded-xl shadow-xl border backdrop-blur-md',
              toast.type === 'success' &&
                'bg-slate-900/95 text-emerald-300 border-emerald-500/30',
              toast.type === 'error' &&
                'bg-slate-900/95 text-rose-300 border-rose-500/30',
              toast.type === 'info' &&
                'bg-slate-900/95 text-cyan-300 border-cyan-500/30'
            )}
          >
            {toast.type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
            {toast.type === 'error' && <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />}
            {toast.type === 'info' && <Info className="w-5 h-5 text-cyan-400 shrink-0" />}

            <p className="text-sm font-medium text-white pr-2">{toast.message}</p>

            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors ml-auto"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

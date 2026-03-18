import React, { useContext } from 'react';
import * as LucideIcons from 'lucide-react';
import * as SFIcons from '@serviette/sf-symbols-react';
import { IconContext } from './IconContext';

// Map generic icon names to equivalent SF Symbol names
const sfIconMap = {
  Terminal: 'AppleTerminalIcon',
  ChevronRight: 'ChevronRightIcon',
  Github: 'CurlybracesIcon',
  Mail: 'EnvelopeIcon',
  Sparkles: 'SparklesIcon',
  MapPin: 'MappinIcon',
  User: 'PersonIcon',
  ExternalLink: 'ArrowUpForwardAppIcon',
  Cpu: 'CpuIcon',
  FolderOpen: 'FolderIcon',
  FileText: 'DocPlaintextIcon',
  Database: 'ServerRackIcon',
  Layers: 'SquareStack3dUpIcon'
};

export const Icon = ({ name, size = 24, className = '', ...props }) => {
  const { iconSet } = useContext(IconContext);

  if (iconSet === 'lucide') {
    const LucideIcon = LucideIcons[name];
    if (!LucideIcon) {
      console.warn(`Lucide icon ${name} not found`);
      return null;
    }
    return <LucideIcon size={size} className={className} {...props} />;
  } else {
    const sfName = sfIconMap[name] || name + 'Icon';
    const SFIcon = SFIcons[sfName];
    if (!SFIcon) {
      console.warn(`SF Symbol ${sfName} not found`);
      return null;
    }
    // Convert size to string/number as needed, width/height standard for SVG
    return <SFIcon width={size} height={size} className={className} {...props} />;
  }
};

export const IconToggle = () => {
  const { iconSet, toggleIconSet } = useContext(IconContext);

  return (
    <button
      onClick={toggleIconSet}
      className="fixed bottom-6 left-6 z-50 glass-card px-4 py-2 rounded-full text-sm font-medium text-white hover:bg-white/10 transition-colors shadow-lg shadow-cyan-500/20 border border-white/10 flex items-center gap-2 cursor-pointer"
    >
      <Icon name="Sparkles" size={16} className="text-cyan-400" />
      {iconSet === 'lucide' ? 'Switch to SF Symbols' : 'Switch to Lucide Icons'}
    </button>
  );
};

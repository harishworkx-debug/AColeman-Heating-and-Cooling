import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export type Crumb = {
  label: string;
  path?: string;
};

export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex items-center flex-wrap gap-1.5 text-navy-400">
        {crumbs.map((crumb, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {crumb.path ? (
              <Link to={crumb.path} className="hover:text-coolblue-700 transition-colors">
                {crumb.label}
              </Link>
            ) : (
              <span className="text-navy-700 font-medium">{crumb.label}</span>
            )}
            {i < crumbs.length - 1 && <ChevronRight className="w-3.5 h-3.5 text-navy-300" />}
          </li>
        ))}
      </ol>
    </nav>
  );
}

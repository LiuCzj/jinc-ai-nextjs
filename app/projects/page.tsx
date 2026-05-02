import { Metadata } from 'next';
import ProjectsPageContent from '@/components/ProjectsPageContent';

export const metadata: Metadata = { title: '项目展示' };

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}
import { getAllPosts } from '@/lib/posts';
import ProjectsPageContent from '@/components/ProjectsPageContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '项目展示 - 锦创AI',
  description: '锦创AI的代表性项目展示',
};

export default function ProjectsPage() {
  const projects = getAllPosts().filter((p) => p.audience === 'projects');

  return <ProjectsPageContent projects={projects} />;
}
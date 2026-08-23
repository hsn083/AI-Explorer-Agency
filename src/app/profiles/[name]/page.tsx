import { notFound } from 'next/navigation';
import { getTeamMember } from '@/lib/team-data';
import ProfileClient from './ProfileClient';

export async function generateMetadata({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  const member = getTeamMember(name);
  
  if (!member) {
    return {
      title: 'Profile Not Found',
    };
  }

  return {
    title: `${member.name} - ${member.role} | AI EXPLORER AGENCY`,
    description: member.intro,
  };
}

export default async function ProfilePage({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  const member = getTeamMember(name);

  if (!member) {
    notFound();
  }

  return <ProfileClient member={member} />;
}

import { prisma } from "@/lib/prisma";
import DashboardClient from "./DashboardClient";

export default async function OfficerDashboard() {
  const allTenders = await prisma.tender.findMany();
  const allBidders = await prisma.bidder.findMany();

  const activeTenders = allTenders.filter(t => t.status === 'Active' || t.status === 'Under Review');
  const pendingBids = allBidders.filter(b => b.status === 'Pending');
  const highRiskBids = allBidders.filter(b => b.riskTag === 'High');

  const tenderData = allTenders.map(t => ({
    name: t.title.substring(0, 20) + '...',
    bids: t.bidsCount
  }));

  return (
    <DashboardClient 
      activeTenders={activeTenders}
      pendingBids={pendingBids}
      highRiskBids={highRiskBids}
      allBidders={allBidders}
      tenderData={tenderData}
    />
  );
}

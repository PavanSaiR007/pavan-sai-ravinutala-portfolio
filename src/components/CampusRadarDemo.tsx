import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, Clock, Filter, Plus, ThumbsUp, Database } from 'lucide-react';

interface IssueTicket {
  id: string;
  title: string;
  category: 'Infrastructure' | 'Network' | 'Lab Facilities' | 'Hostel';
  status: 'Reported' | 'In Review' | 'In Progress' | 'Resolved';
  votes: number;
  location: string;
  createdAt: string;
}

export const CampusRadarDemo: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [filterStatus, setFilterStatus] = useState<string>('All');
  const [tickets, setTickets] = useState<IssueTicket[]>([
    {
      id: 'CIR-1082',
      title: 'Lab 4 System #22-26 GPU Driver Upgrade Needed for Deep Learning Class',
      category: 'Lab Facilities',
      status: 'In Progress',
      votes: 38,
      location: 'CSE Block 2, Lab 4',
      createdAt: 'Yesterday'
    },
    {
      id: 'CIR-1079',
      title: 'Hostel Block C 2nd Floor High-Speed Wi-Fi Access Point Latency',
      category: 'Network',
      status: 'In Review',
      votes: 52,
      location: 'Boys Hostel C Wing',
      createdAt: '2 days ago'
    },
    {
      id: 'CIR-1075',
      title: 'Central Library Air-Conditioning & Quiet Study Desk Illumination',
      category: 'Infrastructure',
      status: 'Resolved',
      votes: 64,
      location: 'VFSTR Central Library 3rd Floor',
      createdAt: 'Last week'
    },
    {
      id: 'CIR-1085',
      title: 'Digital ID Scanner Sensor Glitch at Main Engineering Gate',
      category: 'Infrastructure',
      status: 'Reported',
      votes: 19,
      location: 'North Campus Entrance',
      createdAt: '3 hours ago'
    }
  ]);

  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<'Infrastructure' | 'Network' | 'Lab Facilities' | 'Hostel'>('Lab Facilities');
  const [newLocation, setNewLocation] = useState('');
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  const handleUpvote = (id: string) => {
    setTickets((prev) =>
      prev.map((t) => (t.id === id ? { ...t, votes: t.votes + 1 } : t))
    );
  };

  const handleCreateTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    const newTicket: IssueTicket = {
      id: `CIR-${Math.floor(1090 + Math.random() * 50)}`,
      title: newTitle.trim(),
      category: newCategory,
      status: 'Reported',
      votes: 1,
      location: newLocation.trim() || 'Campus Grounds',
      createdAt: 'Just now'
    };
    setTickets([newTicket, ...tickets]);
    setNewTitle('');
    setNewLocation('');
    setShowSubmitModal(false);
  };

  const filteredTickets = tickets.filter((ticket) => {
    const matchCat = filterCategory === 'All' || ticket.category === filterCategory;
    const matchStat = filterStatus === 'All' || ticket.status === filterStatus;
    return matchCat && matchStat;
  });

  const getStatusBadge = (status: IssueTicket['status']) => {
    switch (status) {
      case 'Resolved':
        return 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30';
      case 'In Progress':
        return 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30';
      case 'In Review':
        return 'bg-blue-500/15 text-blue-700 dark:text-blue-300 border-blue-500/30';
      default:
        return 'bg-surface-muted text-secondary border-subtle';
    }
  };

  return (
    <div className="bg-surface border border-subtle rounded-2xl p-4 sm:p-6 overflow-hidden theme-card-shadow">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-subtle">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-accent-subtle text-accent border border-accent-subtle">
            <Database className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-semibold text-primary text-base">Campus Issue Radar</h4>
              <span className="px-2 py-0.5 text-xs font-mono bg-accent-sec-subtle text-accent-secondary border border-emerald-500/20 rounded-full flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                React & PostgreSQL Project Architecture
              </span>
            </div>
            <p className="text-xs text-secondary">
              Student Grievance Logging, Priority Upvoting & Administrative Pipeline
            </p>
          </div>
        </div>

        <button
          onClick={() => setShowSubmitModal(!showSubmitModal)}
          className="px-3 py-1.5 rounded-lg text-xs font-medium bg-accent hover:opacity-90 text-white transition-all flex items-center gap-1.5 shadow-sm"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Report New Campus Issue</span>
        </button>
      </div>

      {/* New Ticket Form (Collapsible) */}
      {showSubmitModal && (
        <form onSubmit={handleCreateTicket} className="mt-4 p-4 rounded-xl bg-surface-muted border border-subtle text-xs animate-in fade-in duration-200">
          <h5 className="font-semibold text-primary mb-2 flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5 text-accent" />
            <span>Submit Campus Grievance Simulation</span>
          </h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            <div>
              <label className="text-secondary block mb-1">Issue Description</label>
              <input
                type="text"
                placeholder="e.g., Projector bulb flickering in Seminar Hall B..."
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                required
                className="w-full px-3 py-1.5 bg-surface border border-subtle rounded-lg text-primary focus:outline-none focus:border-accent text-xs"
              />
            </div>
            <div>
              <label className="text-secondary block mb-1">Specific Location</label>
              <input
                type="text"
                placeholder="e.g., VFSTR Main Block Room 204"
                value={newLocation}
                onChange={(e) => setNewLocation(e.target.value)}
                className="w-full px-3 py-1.5 bg-surface border border-subtle rounded-lg text-primary focus:outline-none focus:border-accent text-xs"
              />
            </div>
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <label className="text-secondary">Category:</label>
              <select
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value as any)}
                className="px-2 py-1 bg-surface border border-subtle rounded text-primary text-xs"
              >
                <option value="Lab Facilities">Lab Facilities</option>
                <option value="Network">Network / Wi-Fi</option>
                <option value="Infrastructure">Infrastructure</option>
                <option value="Hostel">Hostel</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setShowSubmitModal(false)}
                className="px-3 py-1 text-muted hover:text-primary"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-3 py-1 bg-accent text-white rounded-lg font-medium"
              >
                Log Ticket
              </button>
            </div>
          </div>
        </form>
      )}

      {/* Filter Chips */}
      <div className="flex flex-wrap items-center justify-between gap-2 mt-4 text-xs">
        <div className="flex items-center gap-1.5 overflow-x-auto">
          <span className="text-muted flex items-center gap-1 mr-1">
            <Filter className="w-3 h-3" /> Category:
          </span>
          {['All', 'Lab Facilities', 'Network', 'Infrastructure', 'Hostel'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-2.5 py-1 rounded-md transition-all whitespace-nowrap ${
                filterCategory === cat
                  ? 'bg-accent-subtle text-accent border border-accent-subtle font-medium'
                  : 'text-secondary hover:text-primary hover:bg-surface-muted'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <span className="text-muted">Status:</span>
          {['All', 'Reported', 'In Progress', 'Resolved'].map((stat) => (
            <button
              key={stat}
              onClick={() => setFilterStatus(stat)}
              className={`px-2 py-0.5 rounded text-[11px] transition-all ${
                filterStatus === stat
                  ? 'bg-surface-elevated text-primary border border-subtle font-medium'
                  : 'text-muted hover:text-secondary'
              }`}
            >
              {stat}
            </button>
          ))}
        </div>
      </div>

      {/* Issue Tickets Grid */}
      <div className="mt-3 space-y-2.5">
        {filteredTickets.map((ticket) => (
          <div
            key={ticket.id}
            className="p-3.5 rounded-xl bg-surface-muted/60 border border-subtle hover:border-hover transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] text-muted">{ticket.id}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-surface border border-subtle text-secondary">
                  {ticket.category}
                </span>
                <span className={`text-[11px] px-2 py-0.5 rounded-full border font-medium ${getStatusBadge(ticket.status)}`}>
                  {ticket.status}
                </span>
              </div>
              <h5 className="text-sm font-medium text-primary">{ticket.title}</h5>
              <div className="flex items-center gap-3 text-xs text-muted">
                <span>📍 {ticket.location}</span>
                <span>•</span>
                <span>🕒 {ticket.createdAt}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
              <button
                onClick={() => handleUpvote(ticket.id)}
                className="px-2.5 py-1.5 rounded-lg bg-surface hover:bg-surface-elevated border border-subtle text-secondary hover:text-accent transition-all flex items-center gap-1.5 text-xs"
                title="Endorse this issue"
              >
                <ThumbsUp className="w-3.5 h-3.5" />
                <span className="font-mono font-medium">{ticket.votes}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

'use client';

import { ChevronLeft, ChevronRight, Download, Search } from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface ApprovalItem {
  id: number;
  status: string;
  nextApproval: string;
  documentNo: string;
  mainDescription: string;
  dept: string;
  line: string;
  creationDate: string;
}

export const ApprovalStatus = () => {
  const approvals: ApprovalItem[] = [
    {
      id: 1,
      status: 'Completed',
      nextApproval: '-',
      documentNo: '000001',
      mainDescription: '-',
      dept: 'R&D',
      line: 'Small Part',
      creationDate: '10 Dec 2024',
    },
    {
      id: 2,
      status: 'Completed',
      nextApproval: '-',
      documentNo: '000002',
      mainDescription: '-',
      dept: 'R&D',
      line: 'Small Part',
      creationDate: '10 Dec 2024',
    },
    {
      id: 3,
      status: 'Completed',
      nextApproval: '-',
      documentNo: '000003',
      mainDescription: '-',
      dept: 'R&D',
      line: 'Small Part',
      creationDate: '10 Dec 2024',
    },
    {
      id: 4,
      status: 'Completed',
      nextApproval: '-',
      documentNo: '000004',
      mainDescription: '-',
      dept: 'R&D',
      line: 'Small Part',
      creationDate: '10 Dec 2024',
    },
    {
      id: 5,
      status: 'Completed',
      nextApproval: '-',
      documentNo: '000005',
      mainDescription: '-',
      dept: 'R&D',
      line: 'Small Part',
      creationDate: '10 Dec 2024',
    },
    {
      id: 6,
      status: 'Completed',
      nextApproval: '-',
      documentNo: '000006',
      mainDescription: '-',
      dept: 'R&D',
      line: 'Small Part',
      creationDate: '10 Dec 2024',
    },
    {
      id: 7,
      status: 'Completed',
      nextApproval: '-',
      documentNo: '000007',
      mainDescription: '-',
      dept: 'R&D',
      line: 'Small Part',
      creationDate: '10 Dec 2024',
    },
    {
      id: 8,
      status: 'Completed',
      nextApproval: '-',
      documentNo: '000008',
      mainDescription: '-',
      dept: 'R&D',
      line: 'Small Part',
      creationDate: '10 Dec 2024',
    },
    {
      id: 9,
      status: 'Completed',
      nextApproval: '-',
      documentNo: '000009',
      mainDescription: '-',
      dept: 'R&D',
      line: 'Small Part',
      creationDate: '10 Dec 2024',
    },
  ];

  return (
    <div className="p-6 bg-white">
      <div className="mb-6 text-xl font-semibold">Approval Status</div>

      <div className="space-y-6">
        {/* Filters */}
        <div className="flex items-end gap-4">
          <div className="space-y-1.5">
            <label className="text-sm text-gray-600">Status</label>
            <Select>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm text-gray-600">Division</label>
            <Select>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="div1">Division 1</SelectItem>
                <SelectItem value="div2">Division 2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm text-gray-600">Line</label>
            <Select>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="line1">Line 1</SelectItem>
                <SelectItem value="line2">Line 2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm text-gray-600">Document No.</label>
            <div className="flex gap-2">
              <Input placeholder="Enter document number" className="w-[200px]" />
              <Button variant="outline" size="icon">
                <Search className="size-4" />
              </Button>
            </div>
          </div>

          <div className="ml-auto">
            <Button className="bg-red-700 hover:bg-red-800">
              <Download className="mr-2 size-4" />
              Download
            </Button>
          </div>
        </div>

        {/* Table */}
        <div className="rounded-md border">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left">No.</th>
                <th className="px-4 py-2 text-left">W/F Status</th>
                <th className="px-4 py-2 text-left">Next Approval</th>
                <th className="px-4 py-2 text-left">Document No.</th>
                <th className="px-4 py-2 text-left">Main Description</th>
                <th className="px-4 py-2 text-left">Dept</th>
                <th className="px-4 py-2 text-left">Line</th>
                <th className="px-4 py-2 text-left">Creation Date</th>
              </tr>
            </thead>
            <tbody>
              {approvals.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="px-4 py-2">{item.id}</td>
                  <td className="px-4 py-2">
                    <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/10">
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-2">{item.nextApproval}</td>
                  <td className="px-4 py-2">{item.documentNo}</td>
                  <td className="px-4 py-2">{item.mainDescription}</td>
                  <td className="px-4 py-2">{item.dept}</td>
                  <td className="px-4 py-2">{item.line}</td>
                  <td className="px-4 py-2">{item.creationDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-2">
          <Button variant="outline" size="icon">
            <ChevronLeft className="size-4" />
          </Button>
          <div className="flex items-center gap-1">
            <span className="text-sm text-gray-700">2 of 10</span>
          </div>
          <Button variant="outline" size="icon">
            <ChevronRight className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};


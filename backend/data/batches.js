const COURSES = [
  'Full Stack',
  'Data Science',
  'UI/UX Design',
  'Cloud Computing',
  'Cyber Security',
  'DevOps',
  'Mobile Development',
  'AI & ML',
];

const CENTRES = ['London-HQ', 'Manchester', 'Birmingham', 'Edinburgh', 'Leeds'];

const STATUSES = ['Running', 'Upcoming', 'Completed'];

const SEED_BATCHES = [
  {
    id: 1,
    batchCode: 'B-2401',
    course: 'Full Stack',
    centre: 'London-HQ',
    startDate: '2024-03-15',
    enrolled: 22,
    capacity: 35,
    status: 'Running',
  },
  {
    id: 2,
    batchCode: 'B-2402',
    course: 'Data Science',
    centre: 'Manchester',
    startDate: '2024-04-01',
    enrolled: 18,
    capacity: 30,
    status: 'Running',
  },
  {
    id: 3,
    batchCode: 'B-2403',
    course: 'UI/UX Design',
    centre: 'Birmingham',
    startDate: '2024-05-10',
    enrolled: 12,
    capacity: 25,
    status: 'Upcoming',
  },
  {
    id: 4,
    batchCode: 'B-2404',
    course: 'Cloud Computing',
    centre: 'London-HQ',
    startDate: '2023-11-20',
    enrolled: 28,
    capacity: 28,
    status: 'Completed',
  },
  {
    id: 5,
    batchCode: 'B-2405',
    course: 'Cyber Security',
    centre: 'Edinburgh',
    startDate: '2024-02-05',
    enrolled: 20,
    capacity: 30,
    status: 'Running',
  },
];

function buildExtraBatches(startId, count) {
  const extras = [];

  for (let index = 0; index < count; index += 1) {
    const id = startId + index;
    const course = COURSES[index % COURSES.length];
    const centre = CENTRES[index % CENTRES.length];
    const status = STATUSES[index % STATUSES.length];
    const capacity = 20 + ((index * 3) % 16);
    const enrolled =
      status === 'Upcoming'
        ? Math.min(8, capacity)
        : status === 'Completed'
          ? capacity
          : Math.min(capacity, 10 + ((index * 5) % capacity));

    const month = ((index % 12) + 1).toString().padStart(2, '0');
    const day = ((index % 27) + 1).toString().padStart(2, '0');
    const year = status === 'Completed' ? 2023 : 2024;

    extras.push({
      id,
      batchCode: `B-${2400 + id}`,
      course,
      centre,
      startDate: `${year}-${month}-${day}`,
      enrolled,
      capacity,
      status,
    });
  }

  return extras;
}

const batches = [...SEED_BATCHES, ...buildExtraBatches(6, 25)];

module.exports = batches;

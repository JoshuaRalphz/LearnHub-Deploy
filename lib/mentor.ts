export const isMentor = (userId?: string | null) => {
  return (
    userId === process.env.NEXT_PUBLIC_MENTOR_ID ||
    process.env.NEXT_PUBLIC_MENTOR_ID_1 ||
    process.env.NEXT_PUBLIC_MENTOR_ID_2 ||
    process.env.NEXT_PUBLIC_MENTOR_ID_3 ||
    process.env.NEXT_PUBLIC_MENTOR_ID_4 ||
    process.env.NEXT_PUBLIC_MENTOR_ID_5 ||
    process.env.NEXT_PUBLIC_MENTOR_ID_6 ||
    process.env.NEXT_PUBLIC_MENTOR_ID_7 ||
    process.env.NEXT_PUBLIC_MENTOR_ID_8 ||
    process.env.NEXT_PUBLIC_MENTOR_ID_9 ||
    process.env.NEXT_PUBLIC_MENTOR_ID_10
  );
};


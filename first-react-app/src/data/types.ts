export type TItemProps = {
  path: string;
  name: string;
};

export type TSearchBarProps = {
  placeholder: string;
};

export type TSearchBarState = {
  value: string;
};

export type TRatingProps = {
  rating: number;
};

export type TVoicesProps = {
  voices: number;
};

export type TCardProps = {
  id: number;
  title: string;
  imagePath?: string;
  description: string;
  director: string;
  genres: string[];
  rating?: number;
  voices?: number;
  year: number;
};

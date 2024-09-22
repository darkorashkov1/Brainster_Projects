export interface AboutPageTypes {
  team: any;
  main_title: string;
  first_title: string;
  first_content_block: string;
  mission: {
    title: string,
    body: string
  };
  vision: {
    title: string,
    body: string
  };
  first_image: string;
  second_title: string;

  second_content_block: {
    first_paragraph: {
      title: string,
      body: string
    };
    second_paragraph: {
      title: string,
      body: string
    };
    third_paragraph: {
      title: string,
      body: string
    };
  },

  second_image: string;
  third_title: string;
  third_title_name: string;

  third_content_block: {
    first_p: string,
    second_p: string,
    third_p: string,
    fourth_p: string
  }
  card_section_title: string
  third_image: string;

}

export interface CardType {
  id: string;
  avatarImage: string;
  name: string;
  position: string;
}

export interface EventsType {
  id: string;
  imageUrl: string;
  cardTitle: string;
  description: string;
  month: string;
  day: string
}
export interface SuggestedEventType {
  id: string;
  imageUrl: string;
  cardTitle: string;
  cardSubTitle: string;
  description: string;
  month: string;
  day: string
  readMore: string;
}

export interface Recommendations {
  id: string;
  avatarImage: string;
  name: string;
  posted: string;
  content: string
}

export interface UserDetails {
  map(arg0: (user: any) => import("react").JSX.Element): import("react").ReactNode;
  id: string,
  avatarImage: string,
  firstName: string,
  lastName?: string,
  city: string,
  profession: string,
  telephoneNo: string,
  email: string,
  password?: string,
  bio: string
}

export interface CardStructure {
  id?: string;
  date?: string;
  mkDate?: string;
  mkDayDateMonth?: string;
  link?: string;
  imageUrl?: string;
  cardTitle?: string;
  category?: string;
  description?: string;
  readMore?: string;
  purpose?: string;
  mission?: string;
}

export interface PresenterType {
  id?: string,
  firstName?: string,
  lastName?: string,
  avatar?: string,
  occupation?: string,
  statement?: string,
}

export interface EventAgendaType {
  id?: string;
  time?: string;
  title?: string;
  items?: {
    description1?: string;
    description2?: string;
  }[];
}

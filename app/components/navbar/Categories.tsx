'use client';
import { usePathname, useSearchParams } from "next/navigation";
import CategoryBox from "../CategoryBox";
import Container from "../Container";

import { TbDog, TbCat, TbFish, TbHorseToy} from 'react-icons/tb';
import { GiHummingbird, GiSeaTurtle, GiReptileTail, GiRat, GiHorseHead, GiArcingBolt } from 'react-icons/gi';


export const categories = [
  {
    label: 'Cachorros',
    icon: TbDog,
    description: 'This property is Dog!'
  },
  {
    label: 'Gatos',
    icon: TbCat,
    description: 'This property is Cat!'
  },
  {
    label: 'Peixes',
    icon: TbFish,
    description: 'This property is Bird!'
  },
  {
    label: 'Roedores',
    icon: GiRat,
    description: 'This property is Bird!'
  },
  {
    label: 'Aves',
    icon: GiHummingbird,
    description: 'This property is Bird!'
  },
  {
    label: 'Tartarugas',
    icon: GiSeaTurtle,
    description: 'This property is Bird!'
  },
  {
    label: 'Répteis',
    icon: GiReptileTail,
    description: 'This property is Bird!'
  },
  {
    label: 'Animais Exóticos',
    icon: GiArcingBolt,
    description: 'This property is Bird!'
  },
  {
    label: 'Cavalos',
    icon: GiHorseHead,
    description: 'This property is Bird!'
  },
]
const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();

  const isMainPage = pathname === '/';


  if(!isMainPage) {
    return null;
  }

  return (
    <Container> 
      <div
        className="
          pt-4
          flex
          flex-row
          items-center
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}

      </div>
    </Container>
  )
}

export default Categories;


import { Institucion } from '@/pages/Institucion';
import Home from '@/pages/Landing/Home';
import { NotFound } from '@/pages/NotFound';
import { Oferta } from '@/pages/Oferta';
import { Routes, Route } from 'react-router-dom';

export const AppRouter = (): React.ReactElement => {
  console.log('App cargada correctamente');
  console.info('Index cargado correctamente');
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Institucion" element={<Institucion />} />
      <Route path="/Oferta-Educativa" element={<Oferta />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

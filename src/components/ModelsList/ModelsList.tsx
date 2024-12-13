import React from 'react'
import ListItem from '../ListItem/ListItem';
import { VehicleModel } from '../../types/global';

const ModelsList = ({ models }: { models: VehicleModel[] }) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {models.map((model, index) => (
        <ListItem 
          key={index}
          text={model.Model_Name}
        />
      ))}
    </ul>
  );
};

export default ModelsList

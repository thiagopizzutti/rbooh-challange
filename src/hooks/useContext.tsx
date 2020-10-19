import React, {
  createContext,
  useCallback,
  useState,
} from 'react';
import { api } from '../services/api';



interface IDataContext {
  plateItems: IPlates[], 
  handleGetPlates: () => Promise<void>
  handleOpenAddModal: () => void
  handleCloseAddModal: () => void
  isAddModalOpen: boolean
  handleOpenEditModal: (plate: IPlates) => void
  handleCloseEditModal: () => void
  isEditModalOpen: boolean
  selectedPlate: IPlates
  handletoggleChecked: any
}


export interface IPlates {
  id: number;
  image: string;
  name: string;
  price: number;
  description: string;
  available: boolean
}

export const DataContext = createContext({} as IDataContext);

const DataContextProvider: React.FC = ({ children }) => {
  
  const [plateItems, setPlateItems] = useState([] as IPlates[]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [selectedPlate, setSelectedPlate] = useState({} as IPlates)
  


  const handleGetPlates = useCallback(async() => {
    try {
      const response = await api.get('dishes')
      setPlateItems(response.data)

    } catch (error) {
      console.error(error)
    }
  }, []) 

  const handleOpenAddModal = useCallback(() => {
    setIsAddModalOpen(true)
  },[])
  const handleCloseAddModal = useCallback(() => {
    setIsAddModalOpen(false)
  },[])
  const handleOpenEditModal = useCallback((plate: IPlates) => {
    setSelectedPlate(plate)
    setIsEditModalOpen(true)
  },[])
  const handleCloseEditModal = useCallback(() => {
    setIsEditModalOpen(false)
    setSelectedPlate({} as IPlates)
  }, [])
  
  const handletoggleChecked = async (dish: any) => {
    await api.put(`/dishes/${dish.id}`,{
    ...dish,
      available: !dish.available

    })
    setPlateItems(state => state.map(item => {
      if (item.id === dish.id) {
        return {
          ...item,
          available: !item.available
        }

      }
      return item

    }))
};
 
  
  return (
    <DataContext.Provider
      value={{
        plateItems,
        handleGetPlates,
        handleOpenAddModal,
        handleCloseAddModal,
        isAddModalOpen,
        handleOpenEditModal,
        handleCloseEditModal,
        isEditModalOpen,
        selectedPlate,
        handletoggleChecked,
        
        
      }}
    >
      {children}
    </DataContext.Provider>
  );
};



export default DataContextProvider ;

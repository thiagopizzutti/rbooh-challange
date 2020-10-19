import React, { FormEvent, useContext, useEffect } from 'react';
import { Dialog, DialogTitle, IconButton, makeStyles, Typography } from '@material-ui/core';
import { DataContext, IPlates } from '../../hooks/useContext'
import Form from '../Form';
import Cards from '../Cards';
import CancelIcon from '@material-ui/icons/Cancel';
import { api } from '../../services/api';



const useStyles = makeStyles({
  gridContainer: {
    paddingTop: "20px",
  },
  paperContainer: {
    padding: "20px 20px 0 20px"
  },
  closeModal: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
})

const initialFieldValues = {
  id: 0,
  image: '',
  name: '',
  price: 0,
  available: true,
  description: ''
}

const PlateList: React.FC = () => {
  const classes = useStyles()

  const {
    handleGetPlates,
    isAddModalOpen,
    handleCloseAddModal,
    handleCloseEditModal,
    isEditModalOpen,
    selectedPlate
  } = useContext(DataContext)

  useEffect(() => {
    handleGetPlates()  
  }, [handleGetPlates])



  const handleAddPlate = ({image, name, description, price, available}: IPlates) => async (e: FormEvent) => {
    e.preventDefault()

    if (!image || !name || !price || !description) {
      return
    }

    try {
      const payload = {
        image,
        name,
        description,
        price: Number(price),
        available
      }
      await api.post('dishes', payload)
      handleGetPlates()
      handleCloseAddModal()
    } catch (error) {
      console.error(error)
    }
  }
  const handleEditPlate = ({
    image,
    name,
    price,
    description,
    id,
    available
    }: IPlates) => async (e: FormEvent) => {
    e.preventDefault()
    
    if (!image || !name || !price || !description) {
      return
    }

    try {
      const payload = {
        image,
        name,
        description,
        available,
        price: Number(price)
      }
      await api.put(`/dishes/${id}`, payload)
      handleGetPlates()
      handleCloseEditModal()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      
        <Dialog
          open={isAddModalOpen}
          onClose={handleCloseAddModal}
        >
          <DialogTitle className={classes.closeModal} disableTypography>
            <Typography variant="h4">Adicionar novo prato brasileiro</Typography>
            <IconButton
              onClick={handleCloseAddModal}            
            >
            <CancelIcon fontSize="large" color="secondary" />
            </IconButton>
          </DialogTitle>

          <Form 
            onSubmit={handleAddPlate}
            initialFieldValues={initialFieldValues}
          />
          </Dialog>

      <Dialog
        open={isEditModalOpen}
        onClose={handleCloseEditModal}
      >
        <DialogTitle className={classes.closeModal} disableTypography>
          <Typography variant="h4">Adicionar novo prato brasileiro</Typography>
          <IconButton
            onClick={handleCloseEditModal}
          >
            <CancelIcon fontSize="large" color="secondary" />
          </IconButton>
        </DialogTitle>

        <Form
          onSubmit={handleEditPlate}
          initialFieldValues={selectedPlate}
        />
      </Dialog>
     
      <Cards />
    </>
  );
}
export default PlateList;

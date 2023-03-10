package com.dragonsRegister.dragons.DatabaseClasses;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DragonService {

    @Autowired
    private DragonRepository dragonRepository;

    public void salvar(Dragon dragon) {
        this.dragonRepository.save(dragon);
    }

    public List<Dragon> getDragons() {
        List<Dragon> dragons = new ArrayList<>();
        dragonRepository.findAll().forEach(dragons::add);
        return dragons;
    }
}

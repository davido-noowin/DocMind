package com.docmind.coreapi.repository;

import com.docmind.coreapi.model.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    @Test
    void savesAndFindsUserByEmail() {
        userRepository.save(new User("test@example.com", "hashed-password"));

        assertThat(userRepository.existsByEmail("test@example.com")).isTrue();
        assertThat(userRepository.findByEmail("nope@example.com")).isEmpty();
    }
}
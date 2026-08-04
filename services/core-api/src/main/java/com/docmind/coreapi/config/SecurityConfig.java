package com.docmind.coreapi.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    // NOTE: placeholder config for Sprint 0. Real JWT auth wiring comes in
    // Sprint 1 alongside signup/login endpoints.
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/", "/health").permitAll()
                .anyRequest().authenticated()
            );
        return http.build();
    }
}

package com.app.repository;

import com.app.domain.Customer;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Customer entity.
 */
@SuppressWarnings("unused")
public interface CustomerRepository extends JpaRepository<Customer,Long> {

    @Query("select customer from Customer customer where customer.user.login = ?#{principal.username}")
    List<Customer> findByUserIsCurrentUser();

}

package com.example.freelance.demo.start.entitiy;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "jobs")
public class Jobs {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "title")
    private String title;
    @Column(name = "description")
    private String description;
    @Column(name = "price")
    private int price;
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "create_date", nullable = false, updatable = false)
    private Date createDate = new Date();
    @Temporal(TemporalType.DATE)
    @Column(name = "deadline")
    private Date deadline;
    @Column(name = "active")
    private boolean active;
    @Column(name = "user_name")
    private String userName;
    @ManyToOne
    @JoinColumn(name = "user_name", referencedColumnName = "user_name", insertable = false, updatable = false)
    private User user;

    public Jobs(int id, String title, String description, int price, Date createDate, Date deadline, boolean active, String userName, User user) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.createDate = createDate;
        this.deadline = deadline;
        this.active = active;
        this.userName = userName;
        this.user = user;
    }
    public Jobs() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public Date getDeadline() {
        return deadline;
    }

    public void setDeadline(Date deadline) {
        this.deadline = deadline;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
};

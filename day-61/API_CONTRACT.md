# Student Project Tracker API

## Projects

| Method | Route                  | Purpose                        |
| ------ | ---------------------- | ------------------------------ |
| GET    | `/projects`            | Get all projects               |
| GET    | `/projects/:projectId` | Get one project                |
| POST   | `/projects`            | Create a project               |
| PATCH  | `/projects/:projectId` | Update selected project fields |
| DELETE | `/projects/:projectId` | Delete a project               |

## Tasks

| Method | Route                                | Purpose                     |
| ------ | ------------------------------------ | --------------------------- |
| GET    | `/projects/:projectId/tasks`         | Get all tasks for a project |
| POST   | `/projects/:projectId/tasks`         | Create a task for a project |
| GET    | `/projects/:projectId/tasks/:taskId` | Get one task                |
| PATCH  | `/projects/:projectId/tasks/:taskId` | Update selected task fields |
| DELETE | `/projects/:projectId/tasks/:taskId` | Delete a task               |

## Request Bodies

### Create Project

**POST `/projects`**

```json
{
  "name": "Student Project Tracker",
  "description": "Track my school projects"
}
```

### Update Project

**PATCH `/projects/:projectId`**

```json
{
  "name": "Updated Project Name"
}
```

Only the fields that need to change are required.

### Create Task

**POST `/projects/:projectId/tasks`**

```json
{
  "title": "Create database schema",
  "status": "pending"
}
```

### Update Task

**PATCH `/projects/:projectId/tasks/:taskId`**

```json
{
  "status": "completed"
}
```

Only the fields that need to change are required.

## Success Status Codes

| Status           | Meaning                           | Used For   |
| ---------------- | --------------------------------- | ---------- |
| `200 OK`         | Request succeeded                 | GET, PATCH |
| `201 Created`    | Resource was created              | POST       |
| `204 No Content` | Resource was deleted successfully | DELETE     |

## Common Errors

### 400 Bad Request

Used when the request data is invalid or required data is missing.

```json
{
  "error": "Invalid request data"
}
```

### 404 Not Found

Used when the requested project or task does not exist.

```json
{
  "error": "Project not found"
}
```

or:

```json
{
  "error": "Task not found"
}
```
